import React, { useState } from 'react';
import Comment from './Comment';

function Post({ post, addComment }) {
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText) {
      addComment(post.id, { text: commentText, id: Date.now(), replies: [] });
      setCommentText('');
    }
  };

  return (
    <div>
      <p>{post.text}</p>
      <p><strong>{post.name}</strong></p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
      {showComments && post.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} postId={post.id} />
      ))}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}

export default Post;
