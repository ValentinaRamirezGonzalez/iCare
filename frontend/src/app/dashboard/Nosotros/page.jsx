import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import chat from '../../../icons/chat.png'
import foro from '../../../icons/foro.png'
import Link from "next/link";
import styles from '../../styles/nosotros.module.css'


const Nosotros = () => {
  return (
    <>
      <Header />

     
        <p className={styles.parrafo}>
          Bienvenido a iCare, donde la ayuda emocional es
          nuestra prioridad En un mundo donde la conexión parece cada vez más
          digital y menos humana, nosotros creemos en el poder de la empatía, el
          apoyo mutuo y la comunidad. En iCare, nos hemos
          comprometido a ofrecer un espacio seguro y acogedor donde personas de
          todas partes puedan encontrar consuelo, orientación y solidaridad en
          tiempos de dificultad emocional. Nuestra plataforma reúne a individuos
          que buscan comprensión y aquellos dispuestos a ofrecerla. A través de
          nuestros foros, salas de chat en línea y eventos, creamos un ambiente
          donde puedes compartir tus experiencias, encontrar respuestas a tus
          preguntas y, sobre todo, sentirte comprendido y respaldado. En iCare, creemos en la fortaleza de la comunidad. No importa
          cuál sea tu situación, aquí encontrarás un lugar donde pertenecer y
          personas dispuestas a caminar contigo en tu viaje hacia la sanación
          emocional. Únete a nosotros y descubre el poder transformador de la
          empatía y el apoyo mutuo en iCare.
        </p>

        <div className={styles.contenedores}> 

        <div className={styles.container}>
          <Image src={chat}  alt="imagen chat" />
          <Link href={'/dashboard/Hablemos'}>Hablemos </Link>
        </div>

        <div className={styles.container}>
          <Image src={foro}  alt="imagen chat" />
          <Link href={'/dashboard/Foro'}>Foro </Link>
        </div>

        <div className={styles.container}>
          <Image src={chat}  alt="imagen chat" />
          <Link href={'/dashboard/Eventos'}> Eventos </Link>
        </div>
      </div>

      

      <Footer />
    </>
  );
};

export default Nosotros;
