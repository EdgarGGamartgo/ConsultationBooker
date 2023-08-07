"use client";
import dynamic from "next/dynamic";

const DynamicLogInTemplate = dynamic(() => import("../templates/LogInTemplate"), {
  ssr: false,
});

export default function SignUp() {
  const LogInProps = {
    title: 'Iniciar sesión', 
    actionBtn: 'Entrar',
    optionLabel: '¿Olvidaste tu contraseña?',
    alternativeOptionLabel: '¿No te registraste? Click aquí.',
  }
  
  return (
    <>
      <DynamicLogInTemplate {...LogInProps}/>
    </>
  )
}
