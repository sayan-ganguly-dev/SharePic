import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get( "https://sharepic-backend.onrender.com/post")              ///  "https://sharepic-backend.onrender.com/post"
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feed-container">

      <h1 className="feed-title">Posts</h1>

      {posts.length === 0 ? (
        <div className="empty-feed">
          <h2>No Posts Yet 😔</h2>
        </div>
      ) : (
        <div className="feed-grid">

          {posts.map((post) => (
            <div className="post-card" key={post._id}>

              <img
                src={post.image}
                alt={post.caption}
                className="post-image"
              />

              <div className="post-content">

              <h3 className="post-user">{post.user || "SharePic User"}</h3>

                <p className="post-caption">
                  {post.caption}
                </p>

                <div className="post-actions">

                  <button className="like-btn">
                    ❤️ Like
                  </button>

                  <button className="comment-btn">
                    💬 Comment
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Feed;