import React, {useState} from 'react'
import type {NextPage} from "next";
import Head from "next/head";
import TokenGallery from "../components/TokenGallery";
import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  TokenMetadata,
  ContactView,
  AirdropView,
  DonateView,
  
} from "../views";
import { useWallet } from '@solana/wallet-adapter-react';

const Home:NextPage = (props)=> {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);
  const { publicKey } = useWallet();

  return (
    <>
    {/* <Head>
      <title>Solana Token Creator</title>
      <meta name="Solana token creator" content="Build and create solana token" />
     </Head> */}
     <Head>
  <title>Solana Token Creator</title>
  <meta name="description" content="Create and manage Solana tokens without code. A powerful all-in-one tool for launching tokens, airdrops, and metadata management." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:title" content="Solana Token Creator" />
  <meta property="og:description" content="Create and manage Solana tokens without coding on the Solana blockchain." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://yourdomain.com/assets/images/logo1.png" />
  <meta property="og:url" content="https://yourdomain.com" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Solana Token Creator",
      "url": "https://yourdomain.com",
      "description": "A no-code platform to create and manage Solana tokens. Features include token creation, airdrop, metadata updates, and Solana blockchain integration.",
      "applicationCategory": "BlockchainPlatform",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "operatingSystem": "All",
      "author": {
        "@type": "Organization",
        "name": "SolanaAI",
        "url": "https://yourdomain.com"
      }
    })}
  </script>
</Head>

      <HomeView setOpenCreateModal={setOpenCreateModal} />
       {/* <TokenGallery /> */}
       
      <TokenGallery isConnected={!!publicKey} />


       <ToolView 
      setOpenAirdrop={setOpenAirdrop}
      setOpenContact={setOpenContact}
      setOpenCreateModal={setOpenCreateModal}
      setOpenSendTransaction={setOpenSendTransaction}
      setOpenTokenMetaData={setOpenTokenMetaData}
      />
  
     <FeatureView 
      setOpenAirdrop={setOpenAirdrop}
      setOpenContact={setOpenContact}
      setOpenCreateModal={setOpenCreateModal}
      setOpenSendTransaction={setOpenSendTransaction}
      setOpenTokenMetaData={setOpenTokenMetaData}
      />

       <OfferView />
      <FaqView />
      

      {/* Modal Views */}
      {openCreateModal && (
        <div className="new_loader relative h-full bg-slate-900" >
          <CreateView setOpenCreateModal = {setOpenCreateModal} />
        </div>
      )}  

      {openTokenMetaData && (
        <div className="new_loader relative h-full bg-slate-900" >
          <TokenMetadata setOpenTokenMetaData = {setOpenTokenMetaData} />
        </div>
      )} 

      {openContact && (
        <div className="new_loader relative h-full bg-slate-900" >
          <ContactView setOpenContact = {setOpenContact} />
        </div>
      )}      

     {openAirdrop && (
        <div className="new_loader relative h-full bg-slate-900" >
          <AirdropView setOpenAirdrop={setOpenAirdrop} />

        </div>
      )}    

      {openSendTransaction && (
        <div className="new_loader relative h-full bg-slate-900" >
          <DonateView setOpenSendTransaction = {setOpenSendTransaction} />
        </div>
      )}      

   
    </>
  )
};
export default Home; 