
import React, { useEffect, useState } from "react";
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import {
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import { notify } from "../utils/notifications";
import { ArrowLeft } from "lucide-react";
interface Token {
  name: string;
  symbol: string;
  image: string;
  uri: string;
  mint: string;
}
import {LuArrowLeftFromLine} from "react-icons/lu";
import Link from "next/link";
const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn");

 const GalleryPage: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [nfts, setNfts] = useState<Token[]>([]);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    const storedTokens = localStorage.getItem("tokens");
    if (storedTokens) setTokens(JSON.parse(storedTokens));
    const storedNfts = localStorage.getItem("nfts");
    if (storedNfts) setNfts(JSON.parse(storedNfts));
  }, []);

  const handleViewDetails = (token: Token) => setSelectedToken(token);

  const handleBuy = async (token: Token) => {
    if (!publicKey) {
      notify({ type: "error", message: "Please connect your wallet" });
      return;
    }
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: SELLER_WALLET,
          lamports: 0.1 * LAMPORTS_PER_SOL,
        })
      );
      const signature = await sendTransaction(transaction, connection);
      notify({
        type: "success",
        message: "Payment sent! Seller will transfer token/NFT soon.",
        txid: signature,
      });
    } catch (error: any) {
      notify({
        type: "error",
        message: "Transaction failed",
        description: error.message,
      });
    }
  };

  // Tím/đen gradient style
  const cardClass = "bg-gradient-to-br from-purple-800 via-purple-900 to-black shadow-xl border-0 p-1 rounded-2xl";
  const innerClass = "bg-black rounded-2xl p-5 flex flex-col items-center h-full";

  return (
    <>
    <section className="relative z-50 py-16 rounded-3xl bg-gradient-to-br bg-[#060e26] via-purple-950 to-black min-h-screen">
   <Link href="/" passHref>
  <span className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300">
    <ArrowLeft className="w-4 h-4" />
    Home
  </span>
</Link>
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
          Tokens & NFTs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[...tokens, ...nfts].map((item, idx) => (
            <div key={idx} className="bg-[#221c3a] rounded-2xl shadow-xl border-0 p-1 hover:scale-105 transition-transform duration-300">
  {/* <div className="bg-[#221c3a] rounded-2xl p-5 flex flex-col items-center h-full">
    <img
      src={item.image}
      alt={item.name}
      className="h-40 w-40 object-cover rounded-xl mb-4 border-4 border-[#6c47e6] shadow-lg"
    />
    <h3 className="text-2xl font-bold text-white mb-1 text-center drop-shadow">
      {item.name}
      <span className="text-base text-[#b39ddb] font-normal ml-2">({item.symbol})</span>
    </h3>
    <div className="text-lg text-[#b39ddb] font-semibold mb-4">Price: <span className="text-yellow-300">0.1 SOL</span></div>
    <button
      onClick={() => handleViewDetails(item)}
      className="bg-[#6c47e6] hover:bg-[#7e57c2] text-white font-bold px-6 py-2 rounded-lg shadow transition"
    >
      View Details
    </button>
  </div> */}
  <div className="relative h-60 w-full rounded-2xl overflow-hidden shadow-xl border-0 hover:scale-105 transition-transform duration-300 bg-[#221c3a]">
  <img
    src={item.image}
    alt={item.name}
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Overlay info bottom-left */}
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#221c3acc] to-transparent p-4">
    <h3 className="text-xl font-bold text-white mb-1 drop-shadow">
      {item.name}
      <span className="text-base text-[#b39ddb] font-normal ml-2">({item.symbol})</span>
    </h3>
    <div className="text-base text-[#b39ddb] font-semibold mb-2">
      Price: <span className="text-yellow-300">0.1 SOL</span>
    </div>
    <button
      onClick={() => handleViewDetails(item)}
      className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
    >
      View Details
    </button>
  </div>
</div>

</div>
          ))}
        </div>
         
        {/* Modal chi tiết */}
       {selectedToken && (
 <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center">
    <div className="relative w-full max-w-md">
      <img
        src={selectedToken.image}
        alt={selectedToken.name}
        className="w-full h-96 object-cover rounded-2xl border-4 border-[#6c47e6] shadow-2xl"
      />
      <button
        onClick={() => setSelectedToken(null)}
        className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl bg-black/40 rounded-full px-2"
        aria-label="Close"
      >
        ×
      </button>
      {/* Overlay info bottom-left */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#221c3acc] to-transparent rounded-b-2xl p-5">
        <h3 className="text-2xl font-bold text-[#b39ddb] mb-2">
          {selectedToken.name} <span className="text-[#d1c4e9]">({selectedToken.symbol})</span>
        </h3>
        <div className="mb-1">
          <strong className="text-[#b39ddb]">Mint:</strong>
          <span className="break-all text-xs text-gray-200 ml-2">{selectedToken.mint}</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(selectedToken.mint);
              notify({ type: "success", message: "Copied mint address to clipboard" });
            }}
            className="ml-2 bg-[#6c47e6] hover:bg-[#7e57c2] text-xs text-white px-2 py-1 rounded"
          >
            Copy
          </button>
        </div>
        <div className="mb-1">
          <strong className="text-[#b39ddb]">Metadata:</strong>
          <span className="break-all text-xs text-gray-200 ml-2">{selectedToken.uri}</span>
        </div>
        <div className="mt-3 flex gap-2">
          <a
            href={`https://explorer.solana.com/address/${selectedToken.mint}`}
            target="_blank"
            rel="noreferrer"
            className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
          >
            View on Solana
          </a>
          <button
            onClick={() => handleBuy(selectedToken)}
            className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
          >
            Buy 0.1 SOL
          </button>
        </div>
      </div>
    </div>
  </div>
)}
      </div>
    </section></>
  );
};
export default GalleryPage;