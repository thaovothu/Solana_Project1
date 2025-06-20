

//<nav>, <footer>, aria-labelledby, aria-label
import React, { FC } from 'react';
import { useForm } from '@formspree/react';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from 'react-icons/ti';

export const Footer: FC = () => {
  const [state, handleSubmit] = useForm('mpwrpvje');

  if (state.succeeded) {
    return (
      <h1 className="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
        Thanks for sending your message!
      </h1>
    );
  }

  const menuOne = [
    'Support Center',
    'Customer Support',
    'About Us',
    'Project',
    'Return Policy',
  ];
  const menuTwo = [
    'Press Inquiries',
    'Social Media Support',
    'Image & B-roll',
    'Site Map',
  ];

  const socialLinks = [
    {
      icon: <TiSocialFacebook className="text-2xl" />,
      label: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      icon: <TiSocialLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: <TiSocialTwitter className="text-2xl" />,
      label: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      icon: <TiSocialYoutube className="text-2xl" />,
      label: 'YouTube',
      url: 'https://youtube.com',
    },
  ];

  return (
    // <footer className="bg-default-950/40 background-blur-3xl">
    // <footer className="relative z-50 bg-default-950/40 background-blur-3xl">

    //   <div className="container py-20 lg:px-20">
    //     <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-16">
    //       <div className="col-span-2 sm:col-span-1 lg:col-span-3">
    //         <ul className="flex flex-col gap-3">
    //           <h5 className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
    //             About Us
    //           </h5>
    //           {menuOne.map((item, index) => (
    //             <li key={index}>
    //               <a
    //                 href="#"
    //                 className="text-default-300 text-base transition-all hover:text-white"
    //               >
    //                 {item}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="col-span-2 sm:col-span-1 lg:col-span-3">
    //         <ul className="flex flex-col gap-3">
    //           <h5 className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
    //             My Account
    //           </h5>
    //           {menuTwo.map((item, index) => (
    //             <li key={index}>
    //               <a
    //                 href="#"
    //                 className="text-default-300 text-base transition-all hover:text-white"
    //               >
    //                 {item}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div className="col-span-2 lg:col-span-6">
    //         <div className="bg-primary/20 rounded-xl">
    //           <div className="p-10">
    //             <h6 className="mb-4 text-xl text-white">NewsLetter</h6>
    //             <p className="text-default-200 mb-6 text-base font-medium">
    //               Signup and receive the latest tips
    //             </p>
    //             <form onSubmit={handleSubmit} className="mb-6 space-y-2">
    //               <label htmlFor="email" className="text-base text-white">
    //                 Email
    //               </label>
    //               <div className="relative">
    //                 <input
    //                   type="email"
    //                   id="email"
    //                   name="email"
    //                   className="bg-default-950/60 pe-40 ps-4 h-12 w-full rounded-lg border-white/10 py-4 text-white backdrop-blur-3xl focus:border-white/10 focus:ring-0"
    //                 />
    //                 <button
    //                   type="submit"
    //                   disabled={state.submitting}
    //                   className="hover:bg-primary-hover hover:border-primary-hover border-primary bg-primary end-[6px] absolute top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md px-6 text-white transition-all"
    //                 >
    //                   Subscribe
    //                 </button>
    //               </div>
    //             </form>

    //             <div className="relative z-10">
    //               <h6 className="mb-4 text-base text-white">Follow Us</h6>
    //               <ul className="flex flex-wrap items-center gap-1">
    //                 {socialLinks.map(({ icon, label, url }, index) => (
    //                   <li key={index}>
    //                     <a
    //                       href={url}
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                       aria-label={label}
    //                       className="hover:bg-primary group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 text-default-300 group-hover:text-white"
    //                     >
    //                       {icon}
    //                     </a>
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="border-t border-white/10 py-6">
    //     <div className="md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between lg:px-20">
    //       <p className="text-default-400 text-base font-medium">
    //         @ SolanaAI -{' '}
    //         <a href="#">
    //           Design & Created by <strong>@VoThuThao</strong>
    //         </a>
    //       </p>
    //       <p className="text-default-400 text-base font-medium">
    //         Terms Conditions & Policy
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="relative z-50 bg-default-950/40 background-blur-3xl">
  <div className="container py-20 lg:px-20">
    <div className="grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-16">
      {/* About Us */}
      <nav className="col-span-2 sm:col-span-1 lg:col-span-3" aria-labelledby="footer-about">
        <h5 id="footer-about" className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
          About Us
        </h5>
        <ul className="flex flex-col gap-3">
          {menuOne.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-default-300 text-base transition-all hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* My Account */}
      <nav className="col-span-2 sm:col-span-1 lg:col-span-3" aria-labelledby="footer-account">
        <h5 id="footer-account" className="text-default-200 mb-2 font-medium lg:text-lg xl:text-xl">
          My Account
        </h5>
        <ul className="flex flex-col gap-3">
          {menuTwo.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-default-300 text-base transition-all hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Newsletter + Social */}
      <section className="col-span-2 lg:col-span-6" aria-labelledby="footer-newsletter">
        <div className="bg-primary/20 rounded-xl">
          <div className="p-10">
            <h6 id="footer-newsletter" className="mb-4 text-xl text-white">Newsletter</h6>
            <p className="text-default-200 mb-6 text-base font-medium">
              Signup and receive the latest tips
            </p>
            <form onSubmit={handleSubmit} className="mb-6 space-y-2">
              <label htmlFor="email" className="text-base text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-default-950/60 pe-40 ps-4 h-12 w-full rounded-lg border-white/10 py-4 text-white backdrop-blur-3xl focus:border-white/10 focus:ring-0"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="hover:bg-primary-hover hover:border-primary-hover border-primary bg-primary end-[6px] absolute top-[6px] inline-flex h-9 items-center justify-center gap-2 rounded-md px-6 text-white transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div className="relative z-10">
              <h6 className="mb-4 text-base text-white">Follow Us</h6>
              <ul className="flex flex-wrap items-center gap-1">
                {socialLinks.map(({ icon, label, url }, index) => (
                  <li key={index}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="hover:bg-primary group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 transition-all duration-500 text-default-300 group-hover:text-white"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div className="border-t border-white/10 py-6">
    <div className="md:text-start container flex h-full flex-wrap items-center justify-center gap-4 text-center md:justify-between lg:px-20">
      <p className="text-default-400 text-base font-medium">
        @ SolanaAI –{' '}
        <a href="#">
          Design & Created by <strong>@VoThuThao</strong>
        </a>
      </p>
      <p className="text-default-400 text-base font-medium">
        Terms, Conditions & Privacy Policy
      </p>
    </div>
  </div>
</footer>

  );
};
