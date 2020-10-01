import firebase from "./config";
import "firebase/firestore";

const db = firebase.firestore();
// db.collection("posts")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

export default db;
