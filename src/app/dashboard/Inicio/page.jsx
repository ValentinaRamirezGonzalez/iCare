import Header from '@/app/components/Header'
import Footer from'@/app/components/Footer'
import React from 'react'
import styles from '../../styles/registro.module.css'
import RegisterPage from '@/app/api/register/page'
import LoginPage from '@/app/api/auth/login/page'


const page = () => {
  return (
    <>
    <Header/>
    <LoginPage/>
    
    <Footer/>
    </>
  )
}

export default page
