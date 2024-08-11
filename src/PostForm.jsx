import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && name) {
      addPost({ text, name, comments: [], id: Date.now() });
      setText('');
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
