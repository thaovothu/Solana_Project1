import React,{FC, useCallback, useEffect} from 'react';
import useUserSOLBalanceStore from 'stores/useUserSOLBalanceStore';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, Transaction, TransactionSignature } from '@solana/web3.js';
import {notify} from "../../utils/notifications";
import { AiOutlineClose } from 'react-icons/ai';

import Branding from '../../components/Branding';

interface AirdropViewProps {
  setOpenAirdrop: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AirdropView: React.FC<AirdropViewProps> = ({setOpenAirdrop}) => {
  const wallet = useWallet();
  const {connection} = useConnection();
  const {publicKey} = useWallet();

  const balance = useUserSOLBalanceStore((s) => s.balance);
  const {getUserSOLBalance} = useUserSOLBalanceStore();
  useEffect(()=> {
    if(wallet.publicKey) {
      getUserSOLBalance(wallet.publicKey,connection);
    }

  }, [wallet.publicKey, connection, getUserSOLBalance] );

  const onClick = useCallback(async() => {
    if(!publicKey)
    {
      notify({
        type:"error",
        message:"Sorry Error",
        description:"Wallet not connected",
      });
      return;
    }

    let signature : TransactionSignature="";
    try{
      signature = await connection.requestAirdrop(publicKey,LAMPORTS_PER_SOL);
      notify({
        type:"Success",
        message:"You have successfully claim 1 Airdrop",
        txid: signature,
      });

      const latestBlockHash = await connection.getLatestBlockhash();
      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature,
      });
      getUserSOLBalance(publicKey, connection);
    }
    catch(error:any){
      notify({
        type:"error",
        message:"Airdrop Failed",
        description:error?.message,
        txid: signature,
      });
      console.log("error",`Airdrop Failed ${error?.message}`, signature );
    }
  }, [publicKey, connection, getUserSOLBalance]
);
  
    const CloseModal = () => {
    return (
      <a onClick={() => setOpenAirdrop(false)}
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
                {
                  wallet && (
                    <p>SOL Balance: {(balance || 0).toLocaleString()}</p>
                  )
                }
              </h4>
                <p className="text-default-300 mx-auto mb-5 max-w-sm">
                Now you can clain yoir 1 Airdrop, and use to test and creat token in our platfrom
                </p>
                <div className="flex items-start justify-center">
                  <img src="assets/images/logout.svg" alt="" className="h-40" />
                </div>
                  <div className="mb-6 text-center ">
                    <button onClick={onClick}
                      disabled={!publicKey}
                      className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                      w-full items-center justify-center rounded-lg px-6 py-2 text-white
                      backdrop-blur-2xl transition-all duration-500">
                        <span className="fw-bold">Airdrop 1</span>
                      </button>
                      <CloseModal />
                  </div>   
            </div>
           </div>
          </div>
          </div>
        </div>
      </section> */}
      <section className="relative z-50 flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
  <div className="relative z-50 container">
    <article
      className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl backdrop-blur-2xl"
      aria-label="Solana Airdrop Section"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Cột hình ảnh + branding */}
        <Branding 
          image="auth-img"
          title="To Build your solana token Creator"
          message="Try and create your first ever solana project"
        />

        {/* Cột nội dung chính */}
        <div className="lg:ps-0 flex h-full flex-col p-10">
          <header className="pb-10">
            <a href="/" aria-label="Return to homepage" className="flex">
              <img
                src="assets/images/logo1.png"
                alt="Solana Token Creator Logo"
                className="h-10"
              />
            </a>
          </header>

          <div className="my-auto pb-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">
              {wallet && (
                <span>SOL Balance: {(balance || 0).toLocaleString()}</span>
              )}
            </h2>

            <p className="text-default-300 mx-auto mb-5 max-w-sm">
              Now you can claim your 1 Airdrop and use it to test and create tokens on our platform.
            </p>

            <figure className="flex items-start justify-center">
              <img
                src="assets/images/logout.svg"
                alt="Airdrop illustration"
                className="h-40"
              />
            </figure>

            <footer className="mb-6 text-center">
              <button
                onClick={onClick}
                disabled={!publicKey}
                className="bg-primary-600/90 hover:bg-primary-600 group mt-5 inline-flex 
                  w-full items-center justify-center rounded-lg px-6 py-2 text-white
                  backdrop-blur-2xl transition-all duration-500"
                aria-label="Claim 1 SOL Airdrop"
              >
                <span className="fw-bold">Airdrop 1</span>
              </button>
              <CloseModal />
            </footer>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

      </>
  )
}

