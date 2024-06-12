'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/foro.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";


const NuevoEvento = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date,setDate]=useState('');
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description,date }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create post");
      }
      const result = await response.json();
      console.log(result.message); 
      alert("Evento Creado correctamente");
      router.push('/dashboard/Eventos'); 
    } catch (error) {
      console.error("Error creating Event:", error.message);
    }
  };
  if (!session || session.user.email !== 'tajaramirez@gmail.com') {
    return ;
  }

  return (
    <>
      
      <div className={styles.container}>
        <h1>Nuevo Evento</h1>
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
            <label htmlFor="description">Content:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            
            <input type="datetime-local" 
            value={date}
            onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <button type="submit">Crear Evento</button>
        </form>
      </div>
    </>
  );
};

export default NuevoEvento;
