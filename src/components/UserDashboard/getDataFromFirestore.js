import db from "../../firebase/firebase";
import { firestoreLooper } from "../../firebase/tools";

export default function getData(a) {
  db.collection("posts")
    .get()
    .then((snapshot) => {
      const posts = firestoreLooper(snapshot);
      a(posts);
    })
    .catch((e) => {
      console.log(e);
    });
}
