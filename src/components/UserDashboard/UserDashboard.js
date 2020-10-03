import React, { useEffect, useState } from "react";
// import db from "../../firebase/firebase";

import getData from "./getDataFromFirestore";

const UserDashboard = () => {
  // RETRIEVING DATA FROM A FIRESTORE
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    getData(setUserPosts);
  }, []);

  const UserPost = (props) => {
    return (
      <div>
        <span>{props.title}</span> - <span>{props.post}</span>
      </div>
    );
  };

  const postList = userPosts.map((post) => {
    return <UserPost title={post.title} post={post.post} key={post.id} />;
  });
  console.log(postList);

  return <div>{postList.length > 0 ? postList : null}</div>;
};

export default UserDashboard;
