import Image from "next/image";
import styles from "./styles/page.module.css";
import Header from "./components/Header";
import imagenHero from "../icons/hero.jpg";
import chat from "../icons/chat.png";
import foro from "../icons/foro.png";
import iconos from '../icons/iconos.svg'
import Footer from "./components/Footer";
import { io } from "socket.io-client";

const socket =io('http://localhost:4000')



export default function Home() {




  return (
    <>
      <Header />

      <main className={styles.contenedor}>
        <div className={styles.fondo}>
          <h1 className={styles.titulo}>
            Construyendo juntos Red de apoyo para enfrentar 
            Momentos Difíciles
          </h1>
          <p>
            Únete a nuestra red de apoyo y juntos enfrentemos los momentos más
            difíciles.
          </p>
        </div>
        <div className={styles.imagenHero}>
          <Image src={imagenHero} className={styles.imagen} />
        </div>
      </main>

      <section className={styles.sectionChat}>
        <Image src={chat} className={styles.imagenChat} />

        <div className={styles.itemsChat}>
          <div className={styles.confidencialidad}>
            <h3>Confidencialidad</h3>
            <p>
              Garantizamos un entorno seguro donde puedes compartir tus
              pensamientos y sentimientos sin preocuparte
            </p>
          </div>

          <div>
            <h3>Empatía y Compañerismo</h3>
            <p>
              Nuestos voluntarios estan aqui para escucharte y ofrecerte su
              apoyo incondicional. con una actitud empatica y comprensiva
            </p>
          </div>
          <div>
            <h3>Recursos y Orientación</h3>
            <p>
              Además de la atención emocional, también ofrecemos recursos útiles
              y orientación para ayudarte a manejar tus emociones y encontrar
              soluciones prácticas
            </p>
          </div>
          <div>
            <h3>Disponibilidad 24/7</h3>
            <p>
              Nuestra red de apoyo está disponible las 24 horas del día, los 7
              días de la semana
            </p>
          </div>
        </div>
      </section>

      <p className={styles.parrafo}>
        En nuestro foro de apoyo, encontrarás un espacio seguro donde podrás
        compartir tus experiencias, desafíos y preocupaciones en momentos
        difíciles.
        <br /> Nuestra comunidad está aquí para escucharte, brindarte apoyo
        emocional y compartir recursos útiles para enfrentar las adversidades.
        <br />
        Además, tendrás la oportunidad de conectarte con personas que comparten
        tus experiencias y encontrar inspiración en historias de superación.
        Únete a nosotros y descubre el poder de la solidaridad y el apoyo mutuo
        en nuestro foro
      </p>

      <Image src={foro} className={styles.imagenForo} />

      <section className={styles.sectionJuntos}>
        <h2>Juntos somos Más Fuertes</h2>

        <p>
          encontrarás una comunidad diversa de personas de todo el mundo, unidas
          por el deseo de brindar apoyo mutuo . Desde diferentes rincones del
          planeta, compartimos experiencias, sabiduría y solidaridad para
          ayudarnos unos a otros a superar los desafíos de la vida
        </p>
      </section>

      <div className={styles.descargas}>
        
          <p>
            Próximamente lanzaremos nuestra aplicación<br/> para que puedas acceder
            fácilmente a recursos,<br/> conectarte con otros miembros y recibir apoyo
            en cualquier momento y lugar
          </p>

          <Image src={iconos} className={styles.iconos}/>
        
      </div>

      <Footer/>
    </>
  );
}
