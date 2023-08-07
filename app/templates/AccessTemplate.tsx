"use client";
import { useEffect } from "react";
import { LeftAccessContainerOrganism, PresentationalTextBoxAtom } from "../components";
import { LogInProps } from "../interfaces";

export default function AccessTemplate({ 
  title, 
  actionBtn,
  optionLabel,
  alternativeOptionLabel,
  isLogInPage
}: LogInProps) {
  useEffect(() => {
    const init = async () => {
      const { Ripple, Input, initTE } = await import("tw-elements");
      initTE({ Input, Ripple });
    };
    init();
  }, []);
  
  return (
    <section className="w-full block rounded-lg bg-white shadow-lg dark:bg-neutral-800 g-0 lg:flex lg:flex-wrap gradient-form h-[100vh] bg-neutral-200 dark:bg-neutral-700 p-10 g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full block rounded-lg bg-white shadow-lg dark:bg-neutral-800 g-0 lg:flex lg:flex-wrap">
        <LeftAccessContainerOrganism
          title={title}
          optionLabel={optionLabel}
          actionBtn={actionBtn}
          isLogInPage={isLogInPage}
          alternativeOptionLabel={alternativeOptionLabel}
        />
        {/* <!-- Right column container with background and description--> */}
        <PresentationalTextBoxAtom/>
      </div>
    </section>
  )
}
