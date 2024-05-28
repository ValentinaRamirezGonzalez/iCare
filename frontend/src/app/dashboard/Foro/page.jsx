'use client'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import NewPost from '../../components/NuevoPost'
import Foro from '@/app/components/Foro'



const page = () => {
  return (
    <div>
      
     <Header/>
     <Foro/>
     <NewPost/>
     <Footer/>
    </div>
  )
}

export default page
