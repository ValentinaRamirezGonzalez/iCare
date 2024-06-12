"use client";

import { useEffect, useState } from "react";
import styles from "../styles/listadoForo.module.css";
import { useSession } from "next-auth/react";


export default function Foro() {

  
  const [posts, setPosts] = useState([]);
  const {data:session}=useSession();
 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts')
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const handleDeletePost=(deletedPostId)=>{
    setPosts(posts.filter(post=>post.id!==deletedPostId));
  };

  
  return (
    <div className={styles.contenedor}>
      <h1>Foro</h1>
      <p>
        Tu participación activa brinda apoyo y soluciones a otros miembros. Cada
        pregunta, cada respuesta, es una oportunidad para aprender y crecer
        juntos. ¡Contribuye con tus conocimientos y experiencias para hacer de
        nuestro foro un espacio vibrante y solidario donde todos puedan
        beneficiarse mutuamente! Tu ayuda marca la diferencia. ¡Te esperamos en
        el foro!
      </p>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <div className={styles.contenido}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p className={styles.date}>Fecha de Publicación: {new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>

        ))}
        
      </div>
    </div>
  );
}
