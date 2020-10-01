import React, { useEffect } from "react";
import db from "../../firebase/firebase";
import { firestoreLooper } from "../../firebase/tools";

const UserDashboard = () => {
  useEffect(() => {
    db.collection("posts")
      .get()
      .then((snapshot) => {
        const posts = firestoreLooper(snapshot);
        console.log(posts);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return <div>UserDashboard</div>;
};

export default UserDashboard;
