'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';




const DeleteEvent = ({ eventId }) => {
  const router = useRouter();

  useEffect(() => {
    const deleteEvent = async () => {
      try {
        const res = await fetch(`/api/delete/${eventId}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Failed to delete event');
        }
        // Si la eliminación fue exitosa, redirige a una página o realiza alguna otra acción
        router.push('/events'); // Redirigir a la página de eventos después de eliminar el evento
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    };

    deleteEvent();
  }, [eventId, router]);

  return null;
};

export default DeleteEvent;
