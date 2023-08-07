"use client";
// import Image from 'next/image';
import { useEffect } from "react";
import { SignUpProps } from "../interfaces";
// import consultationPic from '../../public/images/consultation.jpg';

export default function SignUpTemplate({ 
  title, 
  actionBtn,
  optionLabel,
  alternativeOptionLabel
}: SignUpProps) {
  useEffect(() => {
    const init = async () => {
      const { Ripple, Input, initTE } = await import("tw-elements");
      initTE({ Input, Ripple });
    };
    init();
  }, []);
  
  return (
    <section className="gradient-form h-[100vh] bg-neutral-200 dark:bg-neutral-700">
  <div className="h-[100vh] p-10">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-cente flex items-center flex-col justify-center">
                  {/* <Image
                    objectFit='contain'
                    className="w-48"
                    src={consultationPic}
                    alt="logo"
                  /> */}
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    {title}
                  </h4>
                </div>

                <form>
                  <p className="mb-4"></p>
                  {/* <!--Username input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Username" />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Correo electrónico
                    </label>
                  </div>

                  {/* <!--Password input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password" />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Contraseña
                    </label>
                  </div>

                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      >
                        {actionBtn}
                    </button>

                    {/* <!--Forgot password link--> */}
                    {/* <a href="#!">Forgot password?</a> */}
                  </div>

                  {/* <!--Register button--> */}
                  <div className="flex flex-col items-center justify-between pb-6">
                    {/* <p className="mb-0 mr-2">Don&apos;t have an account?</p> */}
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      {/* Register */}
                      {alternativeOptionLabel}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Right column container with background and description--> */}
            <div
              className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              style={{
                background: 'black'
              }}>
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  Agenda una consulta virtual fácil y rápido
                </h4>
                <p className="text-sm">
                  Consulta Fácil es la herramienta que te permite reservar una consulta virtual en pocos pasos
                  para que puedas resolver tus dudas rápidamente con la ayuda de un profesional. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
