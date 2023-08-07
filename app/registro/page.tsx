"use client";
import dynamic from "next/dynamic";

const DynamicSignUpTemplate = dynamic(() => import("../templates/AccessTemplate"), {
  ssr: false,
});

export default function SignUp() {
  const SignInProps = {
    title: 'Registro', 
    actionBtn: 'Crear cuenta',
    optionLabel: '',
    alternativeOptionLabel: '¿Ya te registraste? Accede aquí',
    isLogInPage: false
  }
  
  return (
    <>
      <DynamicSignUpTemplate {...SignInProps}/>
    </>
  )
}
