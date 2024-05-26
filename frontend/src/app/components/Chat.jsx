"use client";

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import styles from "../styles/chat.module.css";

const socket = io("http://localhost:4000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, message]);
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  return (
    <div className={styles.contenedor}>
        <h1>¡Bienvenido a nuestra comunidad de apoyo! </h1>
      <p>
        Queremos invitarte a formar
        parte de nuestro chat anónimo, un espacio seguro donde puedes compartir
        tus experiencias, buscar consejos y ofrecer apoyo en momentos difíciles.
        Aquí, todos estamos juntos para escuchar y ayudarnos mutuamente. Te
        pedimos que participes de manera responsable, respetando siempre la
        privacidad y los sentimientos de los demás. Recuerda que una palabra
        amable puede hacer una gran diferencia en la vida de alguien.
      </p>

      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="escriba su mensaje..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
