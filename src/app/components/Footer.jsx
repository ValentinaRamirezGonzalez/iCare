import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from "next/image";
import google from '../../icons/google.svg'
import Appstore from '../../icons/Appstore.svg'


function Footer() {
  return (
    <div className={styles.footer}>
            <ul>
                <li>iCare</li>
                <li>Sobre Nosotros</li>
                <li>Foro</li>
                <li>Contacto</li>
            </ul>

            <ul>
                <li>Soporte</li>
                <li>Ayuda</li>
                <li>Comunidad</li>
            </ul>
            <ul>
                <li>Legal</li>
                <li>Politicas de Cookies</li>
                <li>Politicas de Privacidad</li>
                <li>Terminos del Servicio</li>
            </ul>
        

        <div className={styles.iconos}>
            <p>Instala la Aplicacion</p>

            <Image src={google} width={200} height={150} alt='imagen google'/>
            <Image src={Appstore} width={200} height={150} alt='imagen appstore'/>

        </div>


      
    </div>
  )
}

export default Footer
