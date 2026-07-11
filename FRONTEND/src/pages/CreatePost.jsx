import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth";
import "../style/createPost.css";

function CreatePost() {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await axios.post(
      "https://sharepic-backend.onrender.com/create-post",               //   "https://sharepic-backend.onrender.com/create-post"
        formData,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      navigate("/feed");
    } catch (err) {
    console.log(err);

    console.log("Status:", err.response?.status);
    console.log("Data:", err.response?.data);

    alert(JSON.stringify(err.response?.data || err.message));
}
  };

  return (
    <div className="create-container">

      <div className="create-card">

        <h1>Create New Post</h1>

        <form onSubmit={handleSubmit}>

          <label className="upload-box">

            {preview ? (
              <img src={preview} alt="preview" />
            ) : (
              <>
                <h3>📷 Upload Image</h3>
                <p>Click to choose an image</p>
              </>
            )}

            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={handleImage}
            />

          </label>

          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            required
          />

          <button type="submit">
            Upload Post
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreatePost;