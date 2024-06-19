
'use client'

import { useEffect, useState } from 'react';
import styles from '../app/styles/eventos.module.css'
import { getSession, useSession } from 'next-auth/react';
import Skeleton from '@/app/components/Skeleton';
import { fetchData } from 'next-auth/client/_utils';





export default function ListadoEventos() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data:session,status } = useSession();
 
  

  

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch('/api/listadoeventos');
      const data = await response.json();
      setEvents(data);
      setLoading(false)
      
    }
    fetchEvents();
  
  }, []);

  
  const handleDelete = async (eventId) => {
    try {
      const response = await fetch(`/api/delete/${eventId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      // Si la eliminación fue exitosa, actualiza la lista de eventos
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  if ( status === 'loading' || loading) {
    return (
      <div className={styles.skeletonContainer}>
        <Skeleton />
        <Skeleton />
        <Skeleton />

      </div>
    )
  }
 
  
  

  return (
    <div className={styles.titulo}>
      <h1>Eventos</h1>
      <ul>
        {events.map(event => (
          <li key={event.id} className={styles.contenedor}>
            <div className={styles.contenido}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className={styles.dat}>Date: {new Date(event.date).toLocaleString()}</p>
            
            {session&& session.user && session.user.email === 'tajaramirez@gmail.com' && (
                <button onClick={() => handleDelete(event.id)}>Eliminar</button>)}
            </div>
          </li>
        ))}
      </ul>
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

  let events = [];

  try {
    events = await fetchEvents(); // Función para obtener eventos desde la base de datos
  } catch (error) {
    console.error("Error fetching events:", error);
  }

  return {
    props: {
      events,
    },
  };
}