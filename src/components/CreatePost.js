import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  const createPost = async () => {
    try {
      await addDoc(collection(db, "posts"), {
        title: title,
        postsText: postText,
        author: {
          username: auth.currentUser?.displayName,
          id: auth.currentUser?.uid,
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div>
      <h1>記事を投稿する</h1>
      <p>タイトル</p>
      <input
        type="text"
        placeholder="タイトルを記入"
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>投稿</p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="投稿を記入"
        onChange={(e) => setPostText(e.target.value)}
      ></textarea>
      <button onClick={createPost}>投稿する</button>
    </div>
  );
}

export default CreatePost;
