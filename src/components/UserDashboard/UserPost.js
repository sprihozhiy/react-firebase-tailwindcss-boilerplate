import React, { useState } from "react";

function UserPost(props){
  const [isEditing, setIsEditing] = useState(false);
  const [postTitle, setPostTitle] = useState(props.title);
  const [postDescription, setPostDescription] = useState(props.description);

  function handleDelete() {
    props.removePost(props.id);
  }

  function handleUpdate(e){
    e.preventDefault();
    props.updatePost(
      props.id,
      postTitle,
      postDescription,
    );
    setIsEditing(false);
  }

  function toggleForm() {
    setIsEditing(!isEditing);
  }

  function handlePostTitleChange(e) {
    setPostTitle(e.target.value);
  }

  function handlePostDescriptionChange(e) {
    setPostDescription(e.target.value);
  }

  let postDisplay;
  
  if (isEditing) {
    postDisplay = (
    <div className="p-4">
      <form onSubmit={handleUpdate}>
        <input type="text" className="mr-4 text-base" name="title" value={postTitle} onChange={handlePostTitleChange} />
        <input type="text" className="mr-4 text-base" name="description" value={postDescription} onChange={handlePostDescriptionChange} />
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mr-2 rounded text-sm">Save</button>
      </form>
    </div>)
  } else {
    postDisplay = (
    <div className="p-4">
      <h4 className="font-bold">{props.title}</h4>
      <p className="text-base">{props.description}</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 mr-2 rounded text-sm" onClick={toggleForm}>Edit</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm" onClick={handleDelete}>Delete</button>
    </div>)
  }

  return (
    postDisplay
  );
};

export default UserPost;
