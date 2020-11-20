import React, { useEffect, useState } from "react";
import firebase from '../../firebase/config';
import {db} from "../../firebase/firebase";
import { useAuth } from "../../contexts/AuthContext";
import UserPost from "./UserPost";
import AddPost from "./AddPost";


function UserDashboard() {
  const [userPosts, setUserPosts] = useState([]);
  const { currentUser } = useAuth();

  // Get Data from a Database
  function getData(a) {
    try{
      db.collection("posts")
      .where('user', '==', currentUser.uid)
      .onSnapshot((snapshot) => {
        const posts = [];
        snapshot.forEach((doc)=> {
          posts.push(doc.data());
        })
        setUserPosts(posts);
      })
    } catch(e) {
      console.log(e);
    }
  }

  //Delete post
  function remove(id) {
    try {
      const postRef = db.collection('posts').doc(`${id}`);
      postRef.delete();
      setUserPosts(userPosts.filter((l) => l.id !== id));
    } catch(e) {
      console.log(e);
    }
  }

  //Update post
  function update(
    id,
    updatedTitle,
    updatedDescription
    ) 
    {
      try{
        const updatedPost = {
          title: updatedTitle,
          description: updatedDescription,
          lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        }
        const postRef = db.collection('posts').doc(`${id}`);
        postRef.update(updatedPost);
      } catch(e) {
        console.log(e);
      }
    }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const postList = userPosts.map((post) => {
    return <UserPost title={post.title} description={post.description} key={post.id} id={post.id} removePost={remove} updatePost={update}/>;
  });

  return (
    <div>
      <AddPost />
      <div>
        {postList.length > 0 ? postList : null}
      </div>    
    </div>);
};

export default UserDashboard;
