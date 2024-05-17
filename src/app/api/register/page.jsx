"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../styles/registro.module.css'
import { useRouter } from 'next/navigation'



const RegisterPage = () => {



    const {register,handleSubmit,formState:{errors} }=useForm();

    const router = useRouter()
    const onSubmit = handleSubmit(async (data)=>{

      if (data.password !== data.confirmPassword){
        return alert('las Contraseñas no Coinciden');
      }
    
      const res = await fetch('/api/auth/singup',{
        method:'POST',
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password

        }),
        headers:{
          'Content-Type': 'application/json'
        },

      })

      if (res.ok){
        router.push('../../dashboard/Inicio')

      }
      
      console.log(res)
    })
  return (
    <>
    <div >
      <h1 className={styles.titulo}>Registrarse</h1>
        <form action="" onSubmit={onSubmit} className={styles.contenedor}>

            <label htmlFor="username">
              Usuario:
            </label>
            <input type="text" 
            {...register("username",{required:{
              value:true,
              message:'Usuario requerido'
            }})}/>
            {
              errors.username && (
                <span>{errors.username.message}</span>
              )
            }

            <label htmlFor="email">
              Correo:
            </label>
            <input type="email" 
                       {...register("email",{required:{
                        value:true,
                        message:'Email Requerido'
                      }})}/>
                      {
                        errors.email && (
                          <span>{errors.email.message}</span>
                        )
                      }

            <label htmlFor="password">
              Contraseña:
            </label>
            <input type="password" 
                        {...register("password",{required:{
                          value:true,
                          message:'Contraseña Requerida'
                        }})}/>
                        {
                          errors.password && (
                            <span>{errors.password.message}</span>
                          )
                        }

            <label htmlFor="confirmPassword">
              Confirmar Contraseña:
            </label>
            <input type="password" 
            {...register("confirmPassword",{required:true})}/>

            <button>
                Registrarse
            </button>
        </form>
      
    </div>
    </>
  )
}

export default RegisterPage
