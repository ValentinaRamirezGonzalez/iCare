import RegisterPage from '@/app/api/register/page'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        
        <RegisterPage/>
        <Footer/>
      
    </div>
  )
}

export default page
