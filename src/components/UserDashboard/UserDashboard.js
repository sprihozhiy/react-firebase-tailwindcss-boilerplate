import React, { useEffect, useState } from "react";
// import db from "../../firebase/firebase";

import UserPost from "./UserPost";
import getData from "./getDataFromFirestore";

const UserDashboard = () => {
  // RETRIEVING DATA FROM A FIRESTORE
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    getData(setUserPosts);
  }, []);

  const postList = userPosts.map((post) => {
    return <UserPost title={post.title} post={post.post} key={post.id} />;
  });

  return <div>{postList.length > 0 ? postList : null}</div>;
};

export default UserDashboard;
