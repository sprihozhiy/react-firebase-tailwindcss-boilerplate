import React, { useEffect, useState } from "react";
import UserPost from "./UserPost";
import {db} from "../../firebase/firebase";
import AddPost from "./AddPost";
import { useAuth } from "../../contexts/AuthContext";

const UserDashboard = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { currentUser } = useAuth();

  function getData(a) {
    db.collection("posts")
    .where('user', '==', currentUser.uid)
    .onSnapshot((snapshot) => {
      const posts = [];
      snapshot.forEach((doc)=> {
        posts.push(doc.data());
      })
      setUserPosts(posts);
    })
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const postList = userPosts.map((post) => {
    return <UserPost title={post.title} description={post.description} key={post.id} />;
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
