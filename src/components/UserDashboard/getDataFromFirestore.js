import db from "../../firebase/firebase";
// import { firestoreLooper } from "../../firebase/tools";

export default function getData(a) {
  db.collection("posts")
    .onSnapshot((snapshot) => {
      const posts = [];
      snapshot.forEach((doc)=> {
        posts.push(doc.data());
      })
      a(posts);
    })
}
