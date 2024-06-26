"use client";
import Link from "next/link";
import styles from "../styles/header.module.css";
import group from "../../icons/Group.svg";
import menu from "../../icons/menu.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";


function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  
 

  const Menu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.contenedor}>
        <Link href={"/"}>iCare.com</Link>
        <div className={styles.enlaces}>
          <Link href={"/dashboard/Nosotros"}>
            Quienes Somos{" "}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87213 1.03232L7.61008 0.768448C7.52761 0.686041 7.41788 0.640642 7.30061 0.640642C7.18341 0.640642 7.07355 0.686041 6.99108 0.768448L4.00179 3.75787L1.00905 0.765131C0.926707 0.682724 0.816852 0.63739 0.699648 0.63739C0.582444 0.63739 0.472524 0.682724 0.390117 0.765131L0.128001 1.02738C-0.042667 1.19792 -0.042667 1.47571 0.128001 1.64624L3.69122 5.22227C3.77356 5.30462 3.88328 5.36263 4.00153 5.36263H4.00289C4.12016 5.36263 4.22989 5.30455 4.31223 5.22227L7.87213 1.65594C7.9546 1.57359 7.99987 1.46055 8 1.34335C8 1.22608 7.9546 1.1146 7.87213 1.03232Z"
                fill="#35414B"
              />
            </svg>
          </Link>
          <Link href={"/dashboard/Eventos"}>
            Eventos{" "}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87213 1.03232L7.61008 0.768448C7.52761 0.686041 7.41788 0.640642 7.30061 0.640642C7.18341 0.640642 7.07355 0.686041 6.99108 0.768448L4.00179 3.75787L1.00905 0.765131C0.926707 0.682724 0.816852 0.63739 0.699648 0.63739C0.582444 0.63739 0.472524 0.682724 0.390117 0.765131L0.128001 1.02738C-0.042667 1.19792 -0.042667 1.47571 0.128001 1.64624L3.69122 5.22227C3.77356 5.30462 3.88328 5.36263 4.00153 5.36263H4.00289C4.12016 5.36263 4.22989 5.30455 4.31223 5.22227L7.87213 1.65594C7.9546 1.57359 7.99987 1.46055 8 1.34335C8 1.22608 7.9546 1.1146 7.87213 1.03232Z"
                fill="#35414B"
              />
            </svg>
          </Link>
          <Link href={"/dashboard/Hablemos"}>Hablemos</Link>
          <Link href={"/dashboard/Foro"}>
            Foro{" "}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87213 1.03232L7.61008 0.768448C7.52761 0.686041 7.41788 0.640642 7.30061 0.640642C7.18341 0.640642 7.07355 0.686041 6.99108 0.768448L4.00179 3.75787L1.00905 0.765131C0.926707 0.682724 0.816852 0.63739 0.699648 0.63739C0.582444 0.63739 0.472524 0.682724 0.390117 0.765131L0.128001 1.02738C-0.042667 1.19792 -0.042667 1.47571 0.128001 1.64624L3.69122 5.22227C3.77356 5.30462 3.88328 5.36263 4.00153 5.36263H4.00289C4.12016 5.36263 4.22989 5.30455 4.31223 5.22227L7.87213 1.65594C7.9546 1.57359 7.99987 1.46055 8 1.34335C8 1.22608 7.9546 1.1146 7.87213 1.03232Z"
                fill="#35414B"
              />
            </svg>
          </Link>
        </div>

        <div className={styles.registro}>
          {session ? (
            <button onClick={() => signOut()} className={styles.closeButton}>Cerrar Sesion</button>
          ) : (
            <>
              <Link href={"/dashboard/Inicio"}>Iniciar sesion</Link>
              <Link href={"/dashboard/Registro"}>Registrate</Link>
            </>
          )}
        </div>

        <Image
          className={styles.menu}
          src={menu}
          onClick={Menu}
          alt="imagen menu"
        />
      </div>

      <div className={`${isOpen ? styles.movile : styles.cerrado}`}>
        <div className={styles.enlacesMovile}>
          <Link href={"/dashboard/Nosotros"}>
            Quienes Somos{" "}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87213 1.03232L7.61008 0.768448C7.52761 0.686041 7.41788 0.640642 7.30061 0.640642C7.18341 0.640642 7.07355 0.686041 6.99108 0.768448L4.00179 3.75787L1.00905 0.765131C0.926707 0.682724 0.816852 0.63739 0.699648 0.63739C0.582444 0.63739 0.472524 0.682724 0.390117 0.765131L0.128001 1.02738C-0.042667 1.19792 -0.042667 1.47571 0.128001 1.64624L3.69122 5.22227C3.77356 5.30462 3.88328 5.36263 4.00153 5.36263H4.00289C4.12016 5.36263 4.22989 5.30455 4.31223 5.22227L7.87213 1.65594C7.9546 1.57359 7.99987 1.46055 8 1.34335C8 1.22608 7.9546 1.1146 7.87213 1.03232Z"
                fill="#35414B"
              />
            </svg>
          </Link>
          <Link href={"/dashboard/Eventos"}>
            Eventos{" "}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87213 1.03232L7.61008 0.768448C7.52761 0.686041 7.41788 0.640642 7.30061 0.640642C7.18341 0.640642 7.07355 0.686041 6.99108 0.768448L4.00179 3.75787L1.00905 0.765131C0.926707 0.682724 0.816852 0.63739 0.699648 0.63739C0.582444 0.63739 0.472524 0.682724 0.390117 0.765131L0.128001 1.02738C-0.042667 1.19792 -0.042667 1.47571 0.128001 1.64624L3.69122 5.22227C3.77356 5.30462 3.88328 5.36263 4.00153 5.36263H4.00289C4.12016 5.36263 4.22989 5.30455 4.31223 5.22227L7.87213 1.65594C7.9546 1.57359 7.99987 1.46055 8 1.34335C8 1.22608 7.9546 1.1146 7.87213 1.03232Z"
                fill="#35414B"
              />
            </svg>
          </Link>
          <Link href={"/dashboard/Hablemos"}>Hablemos</Link>
          <Link href={"/dashboard/Foro"}>
            Foro{" "}
            <svg
              width="8"
              height="6"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87213 1.03232L7.61008 0.768448C7.52761 0.686041 7.41788 0.640642 7.30061 0.640642C7.18341 0.640642 7.07355 0.686041 6.99108 0.768448L4.00179 3.75787L1.00905 0.765131C0.926707 0.682724 0.816852 0.63739 0.699648 0.63739C0.582444 0.63739 0.472524 0.682724 0.390117 0.765131L0.128001 1.02738C-0.042667 1.19792 -0.042667 1.47571 0.128001 1.64624L3.69122 5.22227C3.77356 5.30462 3.88328 5.36263 4.00153 5.36263H4.00289C4.12016 5.36263 4.22989 5.30455 4.31223 5.22227L7.87213 1.65594C7.9546 1.57359 7.99987 1.46055 8 1.34335C8 1.22608 7.9546 1.1146 7.87213 1.03232Z"
                fill="#35414B"
              />
            </svg>
          </Link>

          <div className={styles.registroMovile}>
            

            {session ? (
            <button onClick={() => signOut()} className={styles.closeButton}>Cerrar Sesion</button>
          ) : (
            <>
              <Link href={"/dashboard/Inicio"}>Iniciar sesion</Link>
              <Link href={"/dashboard/Registro"}>Registrate</Link>
            </>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
