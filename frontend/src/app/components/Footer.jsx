import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from "next/image";
import google from '../../icons/google.svg'
import Appstore from '../../icons/Appstore.svg'


function Footer() {
  return (
    <div className={styles.footer}>
            <ul>
                <li> <a href="/">iCare</a></li>
                <li> <a href="/dashboard/Nosotros">Sobre Nosotros</a></li>
                <li><a href="/dashboard/Foro">Foro</a></li>
                <li><a href="/dashboard/Eventos">Eventos</a></li>
            </ul>

            <ul>
                <li>Soporte</li>
                <li><a href="/dashboard/Hablemos">Chat</a></li>
                <li>Comunidad</li>
            </ul>
            <ul>
                <li>Legal</li>
                <li>Politicas de Cookies</li>
                <li>Politicas de Privacidad</li>
                <li>Terminos del Servicio</li>
            </ul>

            <p> <span>&copy;</span>Valentina Ramirez 2024</p>
        


      
    </div>
  )
}

export default Footer
