import React, {FC}  from 'react';
import {LuArrowRightFromLine} from "react-icons/lu";
import { MdGeneratingTokens,MdToken } from 'react-icons/md';
import {RiTokenSwapFill} from 'react-icons/ri';
import {RxTokens} from 'react-icons/rx';
interface FeatureViewProps {
  setOpenAirdrop: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenContact: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSendTransaction: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenTokenMetaData: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FeatureView: React.FC<FeatureViewProps> = ({
      setOpenAirdrop,
      setOpenContact,
      setOpenCreateModal,
      setOpenSendTransaction,
      setOpenTokenMetaData
}) => {
  const features = [
    {
  name: "Token Generator",
  icon: <MdGeneratingTokens />,
  description:
    "Create and manage your own Solana token: minting, deploying, transferring, airdropping, and updating token details.",
  function: setOpenCreateModal,
},
{
  name: "Get Airdrop",
  icon: <MdToken />,
  description:
    "Request SOL airdrops from the Solana devnet to test token transactions and development.",
  function: setOpenAirdrop,
},
{
  name: "Support our site",
  icon: <RiTokenSwapFill />,
  description:
    "Send a small donation via Solana to help us maintain and improve this platform.",
  function: setOpenSendTransaction,
},
{
  name: "Token Metadata",
  icon: <RxTokens />,
  description:
    "View and update your Solana token's metadata such as name, symbol, URI, and more.",
  function: setOpenTokenMetaData,
},

  ]


  return <section
  // <section className="py-20">
  //   <div className=" relative z-50  container">
  //     <div className="mb-10 flex items-end justify-between">
  //       <div className="mx-auto max-w-2xl text-center">
  //         <h2 className="mb-4 text-3xl font-medium capitalize text-white">
  //           Choose Solana Blockchain generator
  //         </h2>
  //         <p className="text-default-200 text-sm font-medium">
  //           Now you can create Solana token <br />
  //           to without code instantly
  //         </p>
  //       </div>
  //     </div>
  //       <div className="bg-default-950/40 flex flex-wrap items-center rounded-3xl
  //       backdrop-blur-3xl">
  //         {
  //           features.map((list,index) => (
  //             <div key = {index}
  //              className={`w-auto grow border-b border-white/10 md:w-1/2 ${index == 0 
  //                 ? "md:border-e"
  //                 : index == 1
  //                 ? ""
  //                 : index == 2
  //                 ? "md:border-e md:border-b-0"
  //                 : ""
  //               }`}>
  //                 <div className="p-8 sm:p-10">
  //                   <div className="bg-primary/10 text-primary mb-10 inline-flex h-16
  //                   w-16 items-center justify-center rounded-xl">
  //                     <i data-lucide="framer">
  //                       {list.icon}
  //                     </i>
  //                   </div>
  //                   <h2 className="mb-4 text-2xl font-medium text-white">
  //                     {list.name}
  //                   </h2>
  //                   <p className="text-default-200 mb-6 text-base">
  //                     {list.description}
  //                   </p>
  //                   <a onClick={()=> list.function(true)} className="hover:bg-primary 
  //                   inline-flex items-center justify-center gap-2 rounded-full border
  //                   border-white/10 px-6 py-2 text-white transition-all duration-300">
  //                     Use Tools
  //                     <i>
  //                       <LuArrowRightFromLine />
  //                     </i>
  //                   </a>
  //                 </div>

  //             </div>
  //           ))
  //         }

  //       </div>
  //   </div>
  // </section>
  
  className="py-20"
  aria-labelledby="features-heading"
  itemScope
  itemType="https://schema.org/WebPageElement"
>
  <div className="relative z-50 container">
    <header className="mb-10 flex items-end justify-center">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="features-heading"
          className="mb-4 text-3xl font-medium capitalize text-white"
        >
          Choose Solana Blockchain Generator
        </h2>
        <p className="text-default-200 text-sm font-medium">
          Now you can create Solana token <br />
          without code instantly
        </p>
      </div>
    </header>

    <div
      className="bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl"
      role="list"
    >
      {features.map((list, index) => (
        <article
          key={index}
          itemScope
          itemType="https://schema.org/SoftwareApplication"
          role="listitem"
          className={`w-auto grow border-b border-white/10 md:w-1/2 ${
            index === 0
              ? "md:border-e"
              : index === 2
              ? "md:border-e md:border-b-0"
              : ""
          }`}
        >
          <div className="p-8 sm:p-10">
            <div
              className="bg-primary/10 text-primary mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl"
              aria-hidden="true"
            >
              {list.icon}
            </div>
            <h3
              className="mb-4 text-2xl font-medium text-white"
              itemProp="name"
            >
              {list.name}
            </h3>
            <p
              className="text-default-200 mb-6 text-base"
              itemProp="description"
            >
              {list.description}
            </p>
            <a
              onClick={() => list.function(true)}
              role="button"
              className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
            >
              Use Tools
              <i>
                <LuArrowRightFromLine />
              </i>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

}
