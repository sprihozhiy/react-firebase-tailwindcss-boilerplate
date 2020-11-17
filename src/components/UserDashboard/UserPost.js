import React from "react";
import firebase from '../../firebase/config';
import {db} from "../../firebase/firebase";

function UserPost(props){

  function handleDelete(id) {
    props.removePost(props.id);
  }

  function handleEdit(post){
    
  }

  return (
    <div className="p-4">
      <h4 className="font-bold">{props.title}</h4>
      <p className="text-base">{props.description}</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 mr-2 rounded text-sm" onClick={handleEdit}>Edit</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserPost;
