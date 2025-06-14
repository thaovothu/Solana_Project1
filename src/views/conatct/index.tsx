import React, {FC} from 'react'
import {useForm, ValidationError} from "@formspree/react";
import { AiOutlineClose} from "react-icons/ai";
import {notify} from "../../utils/notifications";

import Branding from 'components/Branding';
import { stat } from 'fs';
interface ContactViewProps {
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ContactView :React.FC<ContactViewProps> = ({setOpenContact}) => {

  const [state, handelSubmit] = useForm("mpwrpvje");

  if (state.succeeded)
  {
    setOpenContact(false);
    notify({
      type: "success",
      message : "Thanks for sumitting your message, will get back to you",
    });
    
  }
  //Component
  const CloseModal = () => {
    return (
      <a onClick={() => setOpenContact(false)}
        className="relative z-50 group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20
        backdrop-blur-2xl transition-all duration-500 hover:bg-blue-600/60"
      >
        <i className="text-2xl text-white group-hover:text-white">
          <AiOutlineClose />
        </i>
      </a>
    );
  };
  return (
    <>
      {/* <section className="relative z-50 flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className=" relative z-50 container">
          <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
           <div className="grid gap-10 lg:grid-cols-2">
           
           <Branding 
           image="auth-img"
           title="To Build your solana token Creator"
           message="Try and create your first ever solana project"/>
         
          <div className="lg:ps-0 flex h-full flex-col p-10">
            <div className="pb-10">
              <a className="flex">
                <img src="assets/images/logo1.png" alt="logo" className="h-10"/>
              </a>
            </div>
            <div className="my-auto pb-6 text-center">
              <h4 className="mb-4 text-2xl font-bold text-white">
               Send Email to us for more details
              </h4>
                <p className="text-default-300 mx-auto mb-5 max-w-sm">
                 Send message
                </p>
                <div className="text-start">
                  <form onSubmit={handelSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="text-base/normal text-default-200
                      mb-2 block font-semibold"> 
                      Email
                      </label>
                      <input type="email" id="email"
                      className="border-default-200 block w-full rounded border-white/10
                      bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25
                      focus:ring-transparent" placeholder="email" />
                    </div>
                    <ValidationError prefix="Email" field="email" errors={state.errors}  />
                    <textarea name="message" id ="message" rows="6"
                     className="relative border-default-200 block w-full rounded border-white/10
                      bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25
                      focus:ring-transparent" placeholder="message" ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors}  />

                  </form>
                  <div className="mb-6 text-center ">
                    <button type="submit"
                      disabled={state.submitting}
                      className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                      w-full items-center justify-center rounded-lg px-6 py-2 text-white
                      backdrop-blur-2xl transition-all duration-500">
                        <span className="fw-bold">Send Message</span>
                      </button>
                      <CloseModal />
                  </div>
                  
                </div>
            </div>
           </div>
            
           
          </div>
          </div>
        </div>
      </section> */}
  <section className="relative z-50 flex w-full items-center py-6 px-0 lg:h-screen lg:p-10" aria-labelledby="contact-heading">
  <div className="relative z-50 container">
    <article className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Cột trái: Branding hình ảnh */}
        <Branding 
          image="auth-img"
          title="To Build your solana token Creator"
          message="Try and create your first ever solana project"
        />

        {/* Cột phải: Form liên hệ */}
        <div className="lg:ps-0 flex h-full flex-col p-10">
          <header className="pb-10">
            <a href="/" aria-label="Home" className="flex">
              <img src="assets/images/logo1.png" alt="Solana Token Creator Logo" className="h-10" />
            </a>
          </header>

          <main className="my-auto pb-6 text-center">
            <h2 id="contact-heading" className="mb-4 text-2xl font-bold text-white">
              Send Email to us for more details
            </h2>
            <p className="text-default-300 mx-auto mb-5 max-w-sm">
              Send message
            </p>

            <form onSubmit={handelSubmit} className="text-start" aria-label="Contact form">
              <div className="mb-4">
                <label htmlFor="email" className="text-base/normal text-default-200 mb-2 block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-default-200 block w-full rounded border-white/10
                    bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25
                    focus:ring-transparent"
                  placeholder="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-base/normal text-default-200 mb-2 block font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  className="border-default-200 block w-full rounded border-white/10
                    bg-transparent py-1.5 px-3 text-white/80 focus:border-white/25
                    focus:ring-transparent"
                  placeholder="message"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <footer className="mb-6 text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                    w-full items-center justify-center rounded-lg px-6 py-2 text-white
                    backdrop-blur-2xl transition-all duration-500"
                >
                  <span className="fw-bold">Send Message</span>
                </button>
              </footer>
            </form>

            <CloseModal />
          </main>
        </div>
      </div>
    </article>
  </div>
</section>

      </>
  )
}

