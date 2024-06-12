'use client'
import Footer from '@/app/components/Footer'
import Foro from '@/pages/Foro'
import Header from '@/app/components/Header'
import NewPost from '@/app/components/NewPost'
import React from 'react'




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
