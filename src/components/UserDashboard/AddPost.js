import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../../firebase/config';
import { db } from '../../firebase/firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function AddPost() {
    const { currentUser } = useAuth();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function handleTitleChange(e){
        setTitle(e.target.value);
    }

    function handleDescriptionChange(e){
        setDescription(e.target.value);
    }

    function handleAddPost(){
        if(title.length === 0) {
            //CHANGE TO VALIDATION MESSAGE
            console.log('Add title, please');
        } else if (description.length === 0) {
            //CHANGE TO VALIDATION MESSAGE
            console.log('Add description, please');
        } else {
            const newPost = {
            title,
            description,
            id: uuidv4(),
            user: currentUser.uid,
            userEmail: currentUser.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection('posts')
        .doc(newPost.id)
        .set(newPost)
        .catch((e) => {
            console.log(e);
        });
        setTitle('');
        setDescription('');
        }
    }

    return (
        <div className="p-4 flex-col border-solid border-2 border-white">
            <div>
               <input type="text" className="rounded my-2 p-1 block" placeholder="Add Title" name="title" value={title} onChange={handleTitleChange} required /> 
            </div>
            <div>
               <input type="text" className="rounded my-2 p-1 block" placeholder="Add Description" name="description" value={description} onChange={handleDescriptionChange} required /> 
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm" onClick={handleAddPost}>Add Post</button>
        </div> 
    )
}
