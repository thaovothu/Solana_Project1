import React,{FC, useState,useCallback} from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { Metadata,PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
import { AiOutlineClose } from 'react-icons/ai';
import { ClipLoader } from 'react-spinners';
import {notify} from "../../utils/notifications";

import { InputView } from '../input';
import Branding from '../../components/Branding';

export const TokenMetadata:FC = ({setOpenTokenMetaData}) => {

  const {connection} = useConnection();
  const [tokenAddress,setTokenAddress] = useState("");
  const [tokenMetadata, setTokenMetadata] = useState(null);
  const [logo, setLogo] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  //Function
  const getMetadata = useCallback(async (form) =>{
    setIsLoading(true);
    try{
      const tokenMint = new PublicKey(form);
      const metadataPDA = PublicKey.findProgramAddressSync([
        Buffer.from("metadata"),
        PROGRAM_ID.toBuffer(),
        tokenMint.toBuffer(),
      ],PROGRAM_ID)[0];
      const metadataAccount = await connection.getAccountInfo(metadataPDA);
      const [metadata,_] = await Metadata.deserialize(metadataAccount.data);

      let logoRes = await fetch(metadata.data.uri);
      let logoJson = await logoRes.json ();
      let {image} = logoJson;

      setTokenMetadata ({ tokenMetadata, ...metadata.data});
      setLogo(image);
      setIsLoading(false);
      setLoaded(true);
      setTokenAddress(""),
      notify({
        type:"success",
        message: "Successfully fetch token metadata "
      });
    } catch (error:any)
    {
      notify({
        type:"error",
        message: "Token metadata failed "
      });
      setIsLoading(false);
    }
  },[tokenAddress]
  );

  //Component
  const CloseModal = () => {
  return (
    <a onClick={() => setOpenTokenMetaData(false)}
      className="group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20
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
  {isLoading && (
    <div className=" absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/[.3] backdrop-blur-[10px]">
      <ClipLoader />
    </div>
  )}
      {/* <section className="relative z-50 flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className=" relative z-50 container">
          <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
           <div className="grid gap-10 lg:grid-cols-2">

           <Branding 
           image="auth-img"
           title="To Build your solana token Creator"
           message="Try and create your first ever solana project"/>

           {
            !loaded ? (
                <div className="lg:ps-0 flex h-full flex-col p-10">
            <div className="pb-10">
              <a className="flex">
                <img src="assets/images/logo1.png" alt="logo" className="h-10"/>
              </a>
            </div>
            <div className="my-auto pb-6 text-center">
              <h4 className="mb-4 text-2xl font-bold text-white">
                Link yo your new token
              </h4>
                <p className="text-default-300 mx-auto mb-5 max-w-sm">
                  Your Solana token is successfully created
                </p>
                <div className="flex items-start justify-center">
                  <img src={"assets/images/logout.svg"} alt="" className="h-40"/>
                </div>
                <div className="mt-5 w-full text-center">
                    <p className="text-default-300 text-base font-medium leading-6"></p>  
                  
                        <InputView name={"Token Address"} placeholder={tokenAddress} clickhandle={(e) => setTokenAddress(e.target.value)} />

                  <div className="mb-6 text-center ">
                    <button onClick={() => getMetadata(tokenAddress)}
                      className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                      w-full items-center justify-center rounded-lg px-6 py-2 text-white
                      backdrop-blur-2xl transition-all duration-500">
                        <span className="fw-bold">Get Token MetaData</span>
                      </button>
                  </div>
                  <CloseModal />
                </div>
            </div>
           </div>
            ) : (
            <div className="lg:ps-0 flex h-full flex-col p-10">
            <div className="pb-10">
              <a className="flex">
                <img src="assets/images/logo1.png" alt="logo" className="h-10"/>
              </a>
            </div>
            <div className="my-auto pb-6 text-center">
                <div className="flex items-start justify-center">
                  <img src={ logo} alt="" className="h-40"/>
                </div>
                <div className="mt-5 w-full text-center">
                    <p className="text-default-300 text-base font-medium leading-6">
                      {" "}
                    </p>  
                    <InputView name={"Token Address"}  placeholder={tokenMetadata?.name}/>
                    <InputView name={"Symbol"}  placeholder={tokenMetadata?.symbol || "undefined"}/>
                    <InputView name={"Token Uri"}  placeholder={tokenMetadata?.uri}/>
                  <div className="mb-6 text-center ">
                    <a href={tokenMetadata?.uri} target="_blank" rel="noreferrer"
                      className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                      w-full items-center justify-center rounded-lg px-6 py-2 text-white
                      backdrop-blur-2xl transition-all duration-500">
                        <span className="fw-bold">OPEN URI</span>
                      </a>
                  </div>
                  <CloseModal />
                </div>
            </div>
           </div>
            )
           }
           
          </div>
          </div>
        </div>
      </section> */}
      <section
  className="relative z-50 flex w-full items-center py-6 px-0 lg:h-screen lg:p-10"
  itemScope
  itemType="https://schema.org/CryptoCurrency"
>
  <div className="relative z-50 container">
    <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* First Branding section */}
        <Branding
          image="auth-img"
          title="To Build your solana token Creator"
          message="Try and create your first ever solana project"
        />

        {/* Second Content Section */}
        {!loaded ? (
          <div className="lg:ps-0 flex h-full flex-col p-10">
            <div className="pb-10">
              <a className="flex" href="/">
                <img
                  src="assets/images/logo1.png"
                  alt="logo"
                  className="h-10"
                />
              </a>
            </div>
            <div className="my-auto pb-6 text-center">
              <h4 className="mb-4 text-2xl font-bold text-white">
                Link to your new token
              </h4>
              <p
                className="text-default-300 mx-auto mb-5 max-w-sm"
                itemProp="description"
              >
                Your Solana token is successfully created
              </p>
              <div className="flex items-start justify-center">
                <img
                  src="assets/images/logout.svg"
                  alt="token confirmation"
                  className="h-40"
                  itemProp="image"
                />
              </div>
              <div className="mt-5 w-full text-center">
                <InputView
                  name="Token Address"
                  placeholder={tokenAddress}
                  clickhandle={(e) =>
                    setTokenAddress((e.target as HTMLInputElement).value)
                  }
                />
                <div className="mb-6 text-center">
                  <button
                    onClick={() => getMetadata(tokenAddress)}
                    className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                    w-full items-center justify-center rounded-lg px-6 py-2 text-white
                    backdrop-blur-2xl transition-all duration-500"
                  >
                    <span className="fw-bold">Get Token MetaData</span>
                  </button>
                </div>
                <CloseModal />
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:ps-0 flex h-full flex-col p-10">
            <div className="pb-10">
              <a className="flex" href="/">
                <img
                  src="assets/images/logo1.png"
                  alt="logo"
                  className="h-10"
                />
              </a>
            </div>
            <div className="my-auto pb-6 text-center">
              <div className="flex items-start justify-center">
                <img
                  src={logo}
                  alt="token logo"
                  className="h-40"
                  itemProp="image"
                />
              </div>
              <div className="mt-5 w-full text-center" itemScope itemType="https://schema.org/CryptoCurrency">
                <InputView
                  name="Token Name"
                  placeholder={tokenMetadata?.name}
                  itemProp="name"
                />
                <InputView
                  name="Symbol"
                  placeholder={tokenMetadata?.symbol || "undefined"}
                  itemProp="alternateName"
                />
                <InputView
                  name="Token Uri"
                  placeholder={tokenMetadata?.uri}
                  itemProp="url"
                />
                <div className="mb-6 text-center">
                  <a
                    href={tokenMetadata?.uri}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                    w-full items-center justify-center rounded-lg px-6 py-2 text-white
                    backdrop-blur-2xl transition-all duration-500"
                    itemProp="sameAs"
                  >
                    <span className="fw-bold">OPEN URI</span>
                  </a>
                </div>
                <CloseModal />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

      </>
 ); };



// import React, { FC, useState, useCallback, useEffect } from 'react';
// import { useConnection } from '@solana/wallet-adapter-react';
// import { PublicKey } from '@solana/web3.js';
// import { Metadata, PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';
// import { AiOutlineClose } from 'react-icons/ai';
// import { ClipLoader } from 'react-spinners';
// import { notify } from "../../utils/notifications";

// import { InputView } from '../input';
// import Branding from '../../components/Branding';

// interface Props {
//   setOpenTokenMetaData: (open: boolean) => void;
//   initialTokenAddress?: string;
// }

// export const TokenMetadata: FC<Props> = ({ setOpenTokenMetaData, initialTokenAddress }) => {
//   const { connection } = useConnection();
//   const [tokenAddress, setTokenAddress] = useState(initialTokenAddress || "");
//   const [tokenMetadata, setTokenMetadata] = useState<any>(null);
//   const [logo, setLogo] = useState<string | null>(null);
//   const [loaded, setLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // auto-fetch if initial address provided
//   useEffect(() => {
//     if (initialTokenAddress) {
//       getMetadata(initialTokenAddress);
//     }
//   }, [initialTokenAddress]);

//   const getMetadata = useCallback(async (form: string) => {
//     setIsLoading(true);
//     try {
//       const tokenMint = new PublicKey(form);
//       const metadataPDA = PublicKey.findProgramAddressSync(
//         [
//           Buffer.from("metadata"),
//           PROGRAM_ID.toBuffer(),
//           tokenMint.toBuffer(),
//         ],
//         PROGRAM_ID
//       )[0];
//       const metadataAccount = await connection.getAccountInfo(metadataPDA);
//       const [metadata] = await Metadata.deserialize(metadataAccount!.data);

//       const logoRes = await fetch(metadata.data.uri);
//       const logoJson = await logoRes.json();
//       const { image } = logoJson;

//       setTokenMetadata({ ...metadata.data });
//       setLogo(image);
//       setLoaded(true);
//       notify({ type: "success", message: "Successfully fetched token metadata" });
//     } catch (error: any) {
//       notify({ type: "error", message: "Token metadata fetch failed" });
//     } finally {
//       setIsLoading(false);
//     }
//   }, [connection]);

//   const CloseModal = () => (
//     <a
//       onClick={() => setOpenTokenMetaData(false)}
//       className="group mt-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20
//       backdrop-blur-2xl transition-all duration-500 hover:bg-blue-600/60"
//     >
//       <i className="text-2xl text-white group-hover:text-white">
//         <AiOutlineClose />
//       </i>
//     </a>
//   );

//   return (
//     <>
//       {isLoading && (
//         <div className="absolute top-0 left-0 z-50 flex h-screen w-full items-center justify-center bg-black/[.3] backdrop-blur-[10px]">
//           <ClipLoader />
//         </div>
//       )}
//       <section className="relative z-50 flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
//         <div className="relative z-50 container">
//           <div className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl">
//             <div className="grid gap-10 lg:grid-cols-2">
//               {/* Fist */}
//               <Branding
//                 image="auth-img"
//                 title="To Build your solana token Creator"
//                 message="Try and create your first ever solana project"
//               />
//               {/* second */}
//               {!loaded ? (
//                 <div className="lg:ps-0 flex h-full flex-col p-10">
//                   <div className="pb-10">
//                     <a className="flex">
//                       <img src="assets/images/logo1.png" alt="logo" className="h-10" />
//                     </a>
//                   </div>
//                   <div className="my-auto pb-6 text-center">
//                     <h4 className="mb-4 text-2xl font-bold text-white">
//                       View Token Metadata
//                     </h4>
//                     <p className="text-default-300 mx-auto mb-5 max-w-sm">
//                       Enter or pass the token mint address to view its metadata.
//                     </p>
//                     <div className="flex items-start justify-center">
//                       <img src={"assets/images/logout.svg"} alt="" className="h-40" />
//                     </div>
//                     <div className="mt-5 w-full text-center">
//                       <InputView
//                         name={"Token Address"}
//                         placeholder={tokenAddress}
//                         clickhandle={(e) => setTokenAddress(e.target.value)}
//                       />
//                       <div className="mb-6 text-center ">
//                         <button
//                           onClick={() => getMetadata(tokenAddress)}
//                           className="bg-purple-700 hover:bg-purple-800 group mt-5 inline-flex 
//                           w-full items-center justify-center rounded-lg px-6 py-2 text-white
//                           backdrop-blur-2xl transition-all duration-500"
//                         >
//                           <span className="fw-bold">Get Token Metadata</span>
//                         </button>
//                       </div>
//                       <CloseModal />
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="lg:ps-0 flex h-full flex-col p-10">
//                   <div className="pb-10">
//                     <a className="flex">
//                       <img src="assets/images/logo1.png" alt="logo" className="h-10" />
//                     </a>
//                   </div>
//                   <div className="my-auto pb-6 text-center">
//                     <div className="flex items-start justify-center">
//                       <img src={logo!} alt="" className="h-40" />
//                     </div>
//                     <div className="mt-5 w-full text-center">
//                       <InputView name={"Token Name"} placeholder={tokenMetadata?.name} />
//                       <InputView name={"Symbol"} placeholder={tokenMetadata?.symbol || "undefined"} />
//                       <InputView name={"Token URI"} placeholder={tokenMetadata?.uri} />
//                       <div className="mb-6 text-center ">
//                         <a
//                           href={tokenMetadata?.uri}
//                           target="_blank"
//                           rel="noreferrer"
//                           className="bg-purple-600 hover:bg-purple-700 group mt-5 inline-flex 
//                           w-full items-center justify-center rounded-lg px-6 py-2 text-white
//                           backdrop-blur-2xl transition-all duration-500"
//                         >
//                           <span className="fw-bold">Open URI</span>
//                         </a>
//                       </div>
//                       <CloseModal />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
