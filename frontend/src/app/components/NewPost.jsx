import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/foro.module.css";
import prisma from "@/libs/db";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create post");
      }
      const result = await response.json();
      console.log(result.message); // Mensaje de éxito
      alert("Post Creado correctamente");
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  return (
    <>
      <div className={`${session ? styles.hidden : styles.iniciar}`}>
        <p>
          Para poder participar en el foro y unirte a nuestras discusiones, es
          necesario que inicies sesión. Si aún no tienes una cuenta, te
          invitamos a registrarte. Iniciar sesión te permitirá publicar
          comentarios, hacer preguntas y conectarte con otros miembros de
          nuestra comunidad. ¡Esperamos verte pronto en el foro!
        </p>
        <Link href={"/dashboard/Inicio"} className={styles.boton}>Iniciar sesion</Link>
        <Link href={"/dashboard/Registro"} className={styles.boton}>Registrate</Link>
      </div>
      <div className={`${session ? styles.container : styles.hidden}`}>
        <h1>New Post</h1>
        <form onSubmit={handleSubmit} className={styles.contenedor}>
          <div className={styles.contenido}>
            <label htmlFor="title">Titulo</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.contenido}>
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
