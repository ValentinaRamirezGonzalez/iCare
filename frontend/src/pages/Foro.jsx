"use client";

import { useEffect, useState } from "react";
import styles from "../app/styles/listadoForo.module.css";
import { getSession, useSession } from "next-auth/react";
import Skeleton from "@/app/components/Skeleton";




export default function Foro() {

  
  const [posts, setPosts] = useState([]);
  const [loading, setLoading]=useState(true);
  const {data:session,status}=useSession();
 

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
      setLoading(false)
    }

    fetchPosts()
  }, [])

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/deletepost/${postId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete post');
      }
      // Si la eliminación fue exitosa, actualiza la lista de eventos
      const updatedPost = posts.filter((post) => post.id !== postId);
      setPosts(updatedPost);
    } catch (error) {
      console.error('Error deleting posts:', error);
    }
  };


  if (status === 'loading' || loading) {
    return (
      <div className={styles.skeletonContainer}>
        <Skeleton />
        <Skeleton />
        <Skeleton />

      </div>
    )
  }


  
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

              {session && session.user && session.user.email === 'tajaramirez@gmail.com' && (
                <button onClick={() => handleDelete(post.id)}>Eliminar</button>)}
                
              
            
            </div>
          </div>

        ))}
        
      </div>
    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  let posts = [];

  try {
    posts = await fetchPosts(); // Función para obtener posts desde la base de datos
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return {
    props: {
      posts,
    },
  };
}