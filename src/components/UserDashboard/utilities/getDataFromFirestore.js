import {db} from "../../../firebase/firebase";

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
