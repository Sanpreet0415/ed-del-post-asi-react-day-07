import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function FeedPage() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const addComment = (postId, newComment) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [newComment, ...post.comments] } 
        : post
    ));
  };

  return (
    <div>
      <PostForm addPost={addPost} />
      {posts.map((post) => (
        <Post key={post.id} post={post} addComment={addComment} />
      ))}
    </div>
  );
}

export default FeedPage;
