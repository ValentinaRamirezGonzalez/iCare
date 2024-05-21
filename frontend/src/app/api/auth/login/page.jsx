"use client";
import { useForm } from "react-hook-form";
import {signIn, signOut} from 'next-auth/react'
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from '../../../styles/inicio.module.css'



const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router=useRouter()
  const [error,setError]=useState(null)
  

  const onSubmit= handleSubmit(async data =>{
  const res = await signIn('credentials',{
      email: data.email,
      password: data.password,
      redirect:false


     });
     if(res.error){
      setError(res.error)
     }else{
      router.push('/')
     }
  })

  return (
    <div>
      <form className={styles.contenedor} onSubmit={onSubmit}>

        {error && (
          <p>{error}</p>
        )}
        <h1>Iniciar Sesion</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email requerido",
            },
          })}
          placeholder="correo@correo.com"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña Requerida",
            },
          })}
          placeholder="********"
        />
        {errors.password && <span>{errors.password.message}</span>}

      <button>Iniciar sesion</button>
      <button onClick={()=>signOut()}>Cerrar Sesion</button>

        
        
      </form>
    </div>
  );
};

export default LoginPage;
