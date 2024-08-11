import React, { useState } from 'react';

function Comment({ comment, postId }) {
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState(false);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText) {
      setReplyText('');
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <p>{comment.text}</p>
      <button onClick={() => setShowReplies(!showReplies)}>
        {showReplies ? 'Hide Replies' : 'Show Replies'}
      </button>
      {showReplies && comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} postId={postId} />
      ))}
      <form onSubmit={handleReplySubmit}>
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder="Add a reply..."
        />
        <button type="submit">Reply</button>
      </form>
    </div>
  );
}

export default Comment;
