
import NuevoEvento from '@/app/components/Events'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import ListadoEventos from '../../../pages/ListaEventos'

const page = () => {
  return (
    <div>
       <Header/>

       <ListadoEventos/>

       <NuevoEvento/>
      
       

       <Footer/>
      
    </div>
  )
}

export default page
