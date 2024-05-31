// pages/new-post.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/foro.module.css'

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create post');
        
      } 
      const result = await response.json();
      console.log(result.message); // Mensaje de éxito
      router.push('/');

    } catch (error) {
      console.error('Error creating post:', error.message);

      
    }
  };

  return (
    <>
    <div >
      <h1>New Post</h1>
      <form onSubmit={handleSubmit} className={styles.contenedor}>
          <div>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </div>
          <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          </div>
        <button type="submit">Create Post</button>
      </form>
      </div>
    </>
  );
};

export default NewPost;
