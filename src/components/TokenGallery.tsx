// import React, { useEffect, useState } from "react";
// import { useWallet, useConnection } from '@solana/wallet-adapter-react';
// import {
//   Transaction,
//   SystemProgram,
//   PublicKey,
//   LAMPORTS_PER_SOL,
// } from '@solana/web3.js';
// import { notify } from "../utils/notifications";

// interface Token {
//   name: string;
//   symbol: string;
//   image: string;
//   uri: string;
//   mint: string;
// }

// const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn"); // 🔁 Thay bằng ví bạn

// const TokenGallery: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
//   const [tokens, setTokens] = useState<Token[]>([]);
//   const [selectedToken, setSelectedToken] = useState<Token | null>(null);
//   const { publicKey, sendTransaction } = useWallet();
//   const { connection } = useConnection();

//   useEffect(() => {
//     const stored = localStorage.getItem("tokens");
//     if (stored) {
//       setTokens(JSON.parse(stored));
//     }
//   }, []);

//   const handleViewDetails = (token: Token) => {
//     setSelectedToken(token);
//   };

//   const handleRemove = (mint: string) => {
//     const filtered = tokens.filter((t) => t.mint !== mint);
//     setTokens(filtered);
//     localStorage.setItem("tokens", JSON.stringify(filtered));
//   };

//   const handleBuy = async (token: Token) => {
//     if (!publicKey) {
//       notify({ type: "error", message: "Please connect your wallet" });
//       return;
//     }

//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: SELLER_WALLET,
//           lamports: 0.1 * LAMPORTS_PER_SOL,
//         })
//       );

//       const signature = await sendTransaction(transaction, connection);
//       notify({
//         type: "success",
//         message: "Payment sent! Seller will transfer token soon.",
//         txid: signature,
//       });
//     } catch (error: any) {
//       notify({
//         type: "error",
//         message: "Transaction failed",
//         description: error.message,
//       });
//     }
//   };

//   return (
//     <section className="relative z-50  py-16 bg-default-950/40 backdrop-blur-2xl">
//       <div className="container mx-auto px-4">
//         <h2 className="text-white text-3xl font-bold mb-8 text-center">Your Created Tokens</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {tokens.map((token, idx) => (
//             <div key={idx} className="bg-slate-800 p-4 rounded-lg text-white shadow-lg">
//               <img
//                 src={token.image}
//                 alt={token.name}
//                 className="h-40 w-full object-cover rounded-lg mb-3"
//               />
//               <h3 className="text-xl font-semibold">{token.name} ({token.symbol})</h3>
//               <p className="text-sm break-all text-gray-300">{token.mint}</p>

//               <div className="mt-3 flex flex-col gap-2">
//                     <button
//                         onClick={() => handleViewDetails(token)}
//                         className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded"
//                     >
//                         View Details
//                     </button>
//                     <button
//                         onClick={() => handleBuy(token)}
//                         className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
//                     >
//                         Buy 0.1 SOL
//                     </button>
//                     <button
//                         onClick={() => handleRemove(token.mint)}
//                         className="bg-zinc-700 hover:bg-zinc-800 text-white px-3 py-1 rounded"
//                     >
//                         Remove
//                     </button>
//                     </div>

//             </div>
//           ))}
//         </div>

//         {/* Modal */}
//         {/* Modal */}
// {selectedToken && (
//   <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
//     <div className="bg-slate-900 rounded-lg p-6 w-full max-w-md text-white">
//       <h3 className="text-2xl font-bold mb-4">
//         {selectedToken.name} ({selectedToken.symbol})
//       </h3>
//       <img
//         src={selectedToken.image}
//         alt={selectedToken.name}
//         className="w-full h-48 object-cover rounded mb-4"
//       />
//       <p><strong>Mint Address:</strong><br />{selectedToken.mint}</p>

//       <button
//         onClick={() => {
//           navigator.clipboard.writeText(selectedToken.mint);
//           notify({ type: "success", message: "Copied mint address to clipboard" });
//         }}
//         className="bg-zinc-800 hover:bg-zinc-700 text-sm text-white px-3 py-1 rounded mt-2"
//       >
//         Copy Address
//       </button>

//       <p className="mt-4"><strong>Metadata URI:</strong><br />{selectedToken.uri}</p>

//       <div className="mt-6 flex justify-between">
//         <a
//           href={`https://explorer.solana.com/address/${selectedToken.mint}`}
//           target="_blank"
//           rel="noreferrer"
//           className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
//         >
//           View on Solana
//         </a>
//         <button
//           onClick={() => setSelectedToken(null)}
//           className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   </div>
// )}

//       </div>
//     </section>
//   );
// };

// export default TokenGallery;


//web nn

// import React, { useEffect, useState } from "react";
// import { useWallet, useConnection } from '@solana/wallet-adapter-react';
// import {
//   Transaction,
//   SystemProgram,
//   PublicKey,
//   LAMPORTS_PER_SOL,
// } from '@solana/web3.js';
// import { notify } from "../utils/notifications";

// interface Token {
//   name: string;
//   symbol: string;
//   image: string;
//   uri: string;
//   mint: string;
// }

// const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn");

// const TokenGallery: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
//   const [tokens, setTokens] = useState<Token[]>([]);
//   const [selectedToken, setSelectedToken] = useState<Token | null>(null);
//   const { publicKey, sendTransaction } = useWallet();
//   const { connection } = useConnection();

//   useEffect(() => {
//     const stored = localStorage.getItem("tokens");
//     if (stored) {
//       setTokens(JSON.parse(stored));
//     }
//   }, []);

//   const handleViewDetails = (token: Token) => {
//     setSelectedToken(token);
//   };

//   const handleRemove = (mint: string) => {
//     const filtered = tokens.filter((t) => t.mint !== mint);
//     setTokens(filtered);
//     localStorage.setItem("tokens", JSON.stringify(filtered));
//   };

//   const handleBuy = async (token: Token) => {
//     if (!publicKey) {
//       notify({ type: "error", message: "Please connect your wallet" });
//       return;
//     }

//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: SELLER_WALLET,
//           lamports: 0.1 * LAMPORTS_PER_SOL,
//         })
//       );

//       const signature = await sendTransaction(transaction, connection);
//       notify({
//         type: "success",
//         message: "Payment sent! Seller will transfer token soon.",
//         txid: signature,
//       });
//     } catch (error: any) {
//       notify({
//         type: "error",
//         message: "Transaction failed",
//         description: error.message,
//       });
//     }
//   };

//   return (
//     <section className="relative z-50 py-16 bg-default-950/40 backdrop-blur-2xl">
//       <div className="container mx-auto px-4">
//         <h2 className="text-white text-3xl font-bold mb-8 text-center">
//           Tokens
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {tokens.map((token, idx) => (
//             <article
//               key={idx}
//               className="bg-slate-800 p-4 rounded-lg text-white shadow-lg"
//               itemScope
//               itemType="https://schema.org/CryptoCurrency"
//             >
//               <img
//                 src={token.image}
//                 alt={token.name}
//                 className="h-40 w-full object-cover rounded-lg mb-3"
//                 itemProp="image"
//               />
//               <h3 className="text-xl font-semibold" itemProp="name">
//                 {token.name} (<span itemProp="alternateName">{token.symbol}</span>)
//               </h3>
//               <p className="text-sm break-all text-gray-300" itemProp="identifier">
//                 {token.mint}
//               </p>
//               <meta itemProp="url" content={`https://explorer.solana.com/address/${token.mint}`} />
//               <meta itemProp="description" content={`NFT token ${token.name} on Solana`} />

//               <p className="text-sm text-default-300">Price: 0.1 SOL</p>

//               <div className="mt-3 flex flex-col gap-2">
//                 <button
//                   onClick={() => handleViewDetails(token)}
//                   className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded"
//                 >
//                   View Details
//                 </button>
//                 {/* <button
//                   onClick={() => handleRemove(token.mint)}
//                   className="bg-zinc-700 hover:bg-zinc-800 text-white px-3 py-1 rounded"
//                 >
//                   Remove
//                 </button> */}
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedToken && (
//           <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
//             <div className="bg-slate-900 rounded-lg p-6 w-full max-w-md text-white">
//               <h3 className="text-2xl font-bold mb-4">
//                 {selectedToken.name} ({selectedToken.symbol})
//               </h3>
//               <img
//                 src={selectedToken.image}
//                 alt={selectedToken.name}
//                 className="w-full h-48 object-cover rounded mb-4"
//               />
//               <p>
//                 <strong>Mint Address:</strong><br />
//                 {selectedToken.mint}
//               </p>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(selectedToken.mint);
//                   notify({ type: "success", message: "Copied mint address to clipboard" });
//                 }}
//                 className="bg-zinc-800 hover:bg-zinc-700 text-sm text-white px-3 py-1 rounded mt-2"
//               >
//                 Copy Address
//               </button>

//               <p className="mt-4">
//                 <strong>Metadata URI:</strong><br />
//                 {selectedToken.uri}
//               </p>

//               <div className="mt-6 flex flex-wrap justify-between items-center gap-2">
//                 <a
//                   href={`https://explorer.solana.com/address/${selectedToken.mint}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
//                 >
//                   View on Solana
//                 </a>

//                 {publicKey ? (
//                   <button
//                     onClick={() => handleBuy(selectedToken)}
//                     className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
//                   >
//                     Buy 0.1 SOL
//                   </button>
//                 ) : (
//                   <p className="text-sm text-red-400">
//                     Please connect your wallet to buy
//                   </p>
//                 )}

//                 <button
//                   onClick={() => setSelectedToken(null)}
//                   className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TokenGallery;






//Chuyển token thành công
// import React, { useEffect, useState } from "react";
// import { getAssociatedTokenAddress, createTransferInstruction } from "@solana/spl-token";
// import { useWallet, useConnection } from '@solana/wallet-adapter-react';
// import {
//   Transaction,
//   SystemProgram,
//   PublicKey,
//   LAMPORTS_PER_SOL,
// } from '@solana/web3.js';
// import { notify } from "../utils/notifications";

// interface Token {
//   name: string;
//   symbol: string;
//   image: string;
//   uri: string;
//   mint: string;
// }

// const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn");


// const TokenGallery: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
//   const [tokens, setTokens] = useState<Token[]>([]);
//   const [selectedToken, setSelectedToken] = useState<Token | null>(null);
//   const { publicKey, sendTransaction } = useWallet();
//   const { connection } = useConnection();

//   useEffect(() => {
//     const stored = localStorage.getItem("tokens");
//     if (stored) {
//       setTokens(JSON.parse(stored));
//     }
//   }, []);

//   const handleViewDetails = (token: Token) => setSelectedToken(token);

//   const handleRemove = (mint: string) => {
//     const filtered = tokens.filter((t) => t.mint !== mint);
//     setTokens(filtered);
//     localStorage.setItem("tokens", JSON.stringify(filtered));
//   };
  
//   const handleBuy = async (token: Token) => {
//     if (!publicKey) {
//       notify({ type: "error", message: "Please connect your wallet" });
//       return;
//     }
//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: SELLER_WALLET,
//           lamports: 0.1 * LAMPORTS_PER_SOL,
//         })
//       );
//       const signature = await sendTransaction(transaction, connection);
//       notify({
//         type: "success",
//         message: "Payment successful! Seller will transfer the token to you soon.",
//         txid: signature,
//       });
//     } catch (error: any) {
//       notify({
//         type: "error",
//         message: "Transaction failed",
//         description: error.message,
//       });
//     }
//   };

//   return (
//     <section className="relative z-50 py-16 bg-default-950/40 backdrop-blur-2xl">
//       <div className="container mx-auto px-4">
//         <h2 className="text-white text-3xl font-bold mb-8 text-center">
//           Your Token Collection
//         </h2>

//         {tokens.length === 0 ? (
//           <div className="text-center text-default-300 text-lg py-12">
//             You don't have any tokens yet. Create a new token to get started!
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {tokens.map((token, idx) => (
//               <article
//                 key={idx}
//                 className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-2xl text-white shadow-xl border border-slate-700 hover:scale-105 transition-transform"
//                 itemScope
//                 itemType="https://schema.org/CryptoCurrency"
//               >
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={token.image}
//                     alt={token.name}
//                     className="h-40 w-40 object-cover rounded-xl mb-4 border-2 border-primary shadow"
//                     itemProp="image"
//                   />
//                   <h3 className="text-2xl font-bold mb-1" itemProp="name">
//                     {token.name} <span className="text-primary">({token.symbol})</span>
//                   </h3>
//                   <p className="text-base text-default-300 mb-2">
//                     Price: <span className="font-semibold text-yellow-400">0.1 SOL</span>
//                   </p>
//                 </div>
//                 <div className="mt-3 flex flex-col gap-2">
//                   <button
//                     onClick={() => handleViewDetails(token)}
//                     className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-medium transition"
//                   >
//                     View Details
//                   </button>
//                   <button
//                     onClick={() => handleRemove(token.mint)}
//                     className="bg-zinc-700 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg font-medium transition"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>
//         )}

//         {/* Token Details Modal */}
//         {selectedToken && (
//           <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
//             <div className="bg-slate-900 rounded-2xl p-8 w-full max-w-md text-white shadow-2xl relative">
//               <button
//                 onClick={() => setSelectedToken(null)}
//                 className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//               <h3 className="text-2xl font-bold mb-4 text-center">
//                 {selectedToken.name} <span className="text-primary">({selectedToken.symbol})</span>
//               </h3>
//               <img
//                 src={selectedToken.image}
//                 alt={selectedToken.name}
//                 className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-primary"
//               />
//               <div className="mb-2">
//                 <strong>Mint Address:</strong>
//                 <div className="flex items-center gap-2 mt-1">
//                   <span className="break-all text-xs">{selectedToken.mint}</span>
//                   <button
//                     onClick={() => {
//                       navigator.clipboard.writeText(selectedToken.mint);
//                       notify({ type: "success", message: "Copied mint address!" });
//                     }}
//                     className="bg-zinc-800 hover:bg-zinc-700 text-xs text-white px-2 py-1 rounded"
//                   >
//                     Copy
//                   </button>
//                 </div>
//               </div>
//               <div className="mb-2">
//                 <strong>Metadata URI:</strong>
//                 <div className="break-all text-xs">{selectedToken.uri}</div>
//               </div>
//               <div className="mt-6 flex flex-wrap justify-between items-center gap-2">
//                 <a
//                   href={`https://explorer.solana.com/address/${selectedToken.mint}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
//                 >
//                   View on Solana
//                 </a>
//                 {publicKey ? (
//                   <button
//                     onClick={() => handleBuy(selectedToken)}
//                     className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
//                   >
//                     Buy 0.1 SOL
//                   </button>
//                 ) : (
//                   <p className="text-sm text-red-400">
//                     Please connect your wallet to buy
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TokenGallery;



//add nft+token 13/6

// import React, { useEffect, useState } from "react";
// import { useWallet, useConnection } from '@solana/wallet-adapter-react';
// import {
//   Transaction,
//   SystemProgram,
//   PublicKey,
//   LAMPORTS_PER_SOL,
// } from '@solana/web3.js';
// import { notify } from "../utils/notifications";

// interface Token {
//   name: string;
//   symbol: string;
//   image: string;
//   uri: string;
//   mint: string;
// }

// const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn");

// const TokenGallery: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
//   const [tokens, setTokens] = useState<Token[]>([]);
//   const [nfts, setNfts] = useState<Token[]>([]);
//   const [selectedToken, setSelectedToken] = useState<Token | null>(null);
//   const { publicKey, sendTransaction } = useWallet();
//   const { connection } = useConnection();

//   useEffect(() => {
//     const storedTokens = localStorage.getItem("tokens");
//     if (storedTokens) {
//       setTokens(JSON.parse(storedTokens));
//     }
//     const storedNfts = localStorage.getItem("nfts");
//     if (storedNfts) {
//       setNfts(JSON.parse(storedNfts));
//     }
//   }, []);

//   const handleViewDetails = (token: Token) => setSelectedToken(token);

//   const handleRemove = (mint: string, type: "token" | "nft") => {
//     if (type === "token") {
//       const filtered = tokens.filter((t) => t.mint !== mint);
//       setTokens(filtered);
//       localStorage.setItem("tokens", JSON.stringify(filtered));
//     } else {
//       const filtered = nfts.filter((t) => t.mint !== mint);
//       setNfts(filtered);
//       localStorage.setItem("nfts", JSON.stringify(filtered));
//     }
//   };

//   const handleBuy = async (token: Token) => {
//     if (!publicKey) {
//       notify({ type: "error", message: "Please connect your wallet" });
//       return;
//     }
//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: SELLER_WALLET,
//           lamports: 0.1 * LAMPORTS_PER_SOL,
//         })
//       );
//       const signature = await sendTransaction(transaction, connection);
//       notify({
//         type: "success",
//         message: "Payment sent! Seller will transfer token/NFT soon.",
//         txid: signature,
//       });
      
//     } catch (error: any) {
//       notify({
//         type: "error",
//         message: "Transaction failed",
//         description: error.message,
//       });
//     }
//   };

//   return (
//     <section className="relative z-50 py-16 bg-default-950/40 backdrop-blur-2xl">
//       <div className="container mx-auto px-4">
//         <h2 className="text-white text-3xl font-bold mb-8 text-center">
//           Your Created Tokens
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {tokens.map((token, idx) => (
//             <div key={idx} className="bg-slate-800 p-4 rounded-lg text-white shadow-lg">
//               <img
//                 src={token.image}
//                 alt={token.name}
//                 className="h-40 w-full object-cover rounded-lg mb-3"
//               />
//               <h3 className="text-xl font-semibold">{token.name} ({token.symbol})</h3>
//               <p className="text-sm break-all text-gray-300">{token.mint}</p>
//               <div className="mt-3 flex flex-col gap-2">
//                 <button
//                   onClick={() => handleViewDetails(token)}
//                   className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded"
//                 >
//                   View Details
//                 </button>
//                 <button
//                   onClick={() => handleBuy(token)}
//                   className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
//                 >
//                   Buy 0.1 SOL
//                 </button>
//                 <button
//                   onClick={() => handleRemove(token.mint, "token")}
//                   className="bg-zinc-700 hover:bg-zinc-800 text-white px-3 py-1 rounded"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {nfts.length > 0 && (
//           <>
//             <h2 className="text-white text-3xl font-bold mb-8 mt-16 text-center">
//               Your Created NFTs
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               {nfts.map((nft, idx) => (
//                 <div key={idx} className="bg-slate-800 p-4 rounded-lg text-white shadow-lg">
//                   <img
//                     src={nft.image}
//                     alt={nft.name}
//                     className="h-40 w-full object-cover rounded-lg mb-3"
//                   />
//                   <h3 className="text-xl font-semibold">{nft.name} ({nft.symbol})</h3>
//                   <p className="text-sm break-all text-gray-300">{nft.mint}</p>
//                   <div className="mt-3 flex flex-col gap-2">
//                     <button
//                       onClick={() => handleViewDetails(nft)}
//                       className="bg-purple-700 hover:bg-purple-800 text-white px-3 py-1 rounded"
//                     >
//                       View Details
//                     </button>
//                     <button
//                       onClick={() => handleBuy(nft)}
//                       className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
//                     >
//                       Buy 0.1 SOL
//                     </button>
//                     <button
//                       onClick={() => handleRemove(nft.mint, "nft")}
//                       className="bg-zinc-700 hover:bg-zinc-800 text-white px-3 py-1 rounded"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* Modal */}
//         {selectedToken && (
//           <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
//             <div className="bg-slate-900 rounded-lg p-6 w-full max-w-md text-white">
//               <h3 className="text-2xl font-bold mb-4">
//                 {selectedToken.name} ({selectedToken.symbol})
//               </h3>
//               <img
//                 src={selectedToken.image}
//                 alt={selectedToken.name}
//                 className="w-full h-48 object-cover rounded mb-4"
//               />
//               <p><strong>Mint Address:</strong><br />{selectedToken.mint}</p>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(selectedToken.mint);
//                   notify({ type: "success", message: "Copied mint address to clipboard" });
//                 }}
//                 className="bg-zinc-800 hover:bg-zinc-700 text-sm text-white px-3 py-1 rounded mt-2"
//               >
//                 Copy Address
//               </button>
//               <p className="mt-4"><strong>Metadata URI:</strong><br />{selectedToken.uri}</p>
//               <div className="mt-6 flex justify-between">
//                 <a
//                   href={`https://explorer.solana.com/address/${selectedToken.mint}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
//                 >
//                   View on Solana
//                 </a>
//                 <button
//                   onClick={() => setSelectedToken(null)}
//                   className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TokenGallery;


// import React, { useEffect, useState } from "react";
// import { useWallet, useConnection } from '@solana/wallet-adapter-react';
// import {
//   Transaction,
//   SystemProgram,
//   PublicKey,
//   LAMPORTS_PER_SOL,
// } from '@solana/web3.js';
// import { notify } from "../utils/notifications";

// interface Token {
//   name: string;
//   symbol: string;
//   image: string;
//   uri: string;
//   mint: string;
// }
// import {LuArrowRightFromLine} from "react-icons/lu";
// const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn");

// const TokenGallery: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
//   const [tokens, setTokens] = useState<Token[]>([]);
//   const [nfts, setNfts] = useState<Token[]>([]);
//   const [selectedToken, setSelectedToken] = useState<Token | null>(null);
//   const { publicKey, sendTransaction } = useWallet();
//   const { connection } = useConnection();

//   useEffect(() => {
//     const storedTokens = localStorage.getItem("tokens");
//     if (storedTokens) setTokens(JSON.parse(storedTokens));
//     const storedNfts = localStorage.getItem("nfts");
//     if (storedNfts) setNfts(JSON.parse(storedNfts));
//   }, []);

//   const handleViewDetails = (token: Token) => setSelectedToken(token);

//   const handleBuy = async (token: Token) => {
//     if (!publicKey) {
//       notify({ type: "error", message: "Please connect your wallet" });
//       return;
//     }
//     try {
//       const transaction = new Transaction().add(
//         SystemProgram.transfer({
//           fromPubkey: publicKey,
//           toPubkey: SELLER_WALLET,
//           lamports: 0.1 * LAMPORTS_PER_SOL,
//         })
//       );
//       const signature = await sendTransaction(transaction, connection);
//       notify({
//         type: "success",
//         message: "Payment sent! Seller will transfer token/NFT soon.",
//         txid: signature,
//       });
//     } catch (error: any) {
//       notify({
//         type: "error",
//         message: "Transaction failed",
//         description: error.message,
//       });
//     }
//   };

//   // Tím/đen gradient style
//   const cardClass = "bg-gradient-to-br from-purple-800 via-purple-900 to-black shadow-xl border-0 p-1 rounded-2xl";
//   const innerClass = "bg-black rounded-2xl p-5 flex flex-col items-center h-full";

//   return (
//     <section className="relative z-50 py-16 rounded-3xl bg-gradient-to-br bg-[#060e26] via-purple-950 to-black min-h-screen">
//       <div className="container mx-auto px-4">
//         <h2 className="text-white text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
//           Tokens & NFTs
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//   {[...tokens, ...nfts].slice(0, 6).map((item, idx) => (
//     <div key={idx} className="bg-[#221c3a] rounded-2xl shadow-xl border-0 p-1 hover:scale-105 transition-transform duration-300">
//   {/* <div className="bg-[#221c3a] rounded-2xl p-5 flex flex-col items-center h-full">
//     <img
//       src={item.image}
//       alt={item.name}
//       className="h-40 w-40 object-cover rounded-xl mb-4 border-4 border-[#6c47e6] shadow-lg"
//     />
//     <h3 className="text-2xl font-bold text-white mb-1 text-center drop-shadow">
//       {item.name}
//       <span className="text-base text-[#b39ddb] font-normal ml-2">({item.symbol})</span>
//     </h3>
//     <div className="text-lg text-[#b39ddb] font-semibold mb-4">Price: <span className="text-yellow-300">0.1 SOL</span></div>
//     <button
//       onClick={() => handleViewDetails(item)}
//       className="bg-[#6c47e6] hover:bg-[#7e57c2] text-white font-bold px-6 py-2 rounded-lg shadow transition"
//     >
//       View Details
//     </button>
//   </div> */}
//   <div className="relative h-60 w-full rounded-2xl overflow-hidden shadow-xl border-0 hover:scale-105 transition-transform duration-300 bg-[#221c3a]">
//   <img
//     src={item.image}
//     alt={item.name}
//     className="absolute inset-0 w-full h-full object-cover"
//   />
//   {/* Overlay info bottom-left */}
//   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#221c3acc] to-transparent p-4">
    
//     <h3 className="text-xl font-bold text-white mb-1 drop-shadow">
//       {item.name}
//       <span className="text-base text-[#b39ddb] font-normal ml-2">({item.symbol})</span>
//     </h3>
//     <div className="text-base text-[#b39ddb] font-semibold mb-2">
//       Price: <span className="text-yellow-300">0.1 SOL</span>
//     </div>
//     <button
//       onClick={() => handleViewDetails(item)}
//       className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
//     >
//       View Details
//     </button>
//   </div>
// </div>

// </div>
//           ))}
//         </div>
//           {/* Nút xem tất cả */}
// {(tokens.length + nfts.length) > 5 && (
//   <div className="flex justify-center mt-8">
//     <a
//       href="/gallery"
//       className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
//     >
//       View all Token & NFT
//       <i>
//                       <LuArrowRightFromLine />
//                     </i>
//     </a>
//   </div>
// )}
//         {/* Modal chi tiết */}
//        {selectedToken && (
//  <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center">
//     <div className="relative w-full max-w-md">
//       <img
//         src={selectedToken.image}
//         alt={selectedToken.name}
//         className="w-full h-96 object-cover rounded-2xl border-4 border-[#6c47e6] shadow-2xl"
//       />
//       <button
//         onClick={() => setSelectedToken(null)}
//         className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl bg-black/40 rounded-full px-2"
//         aria-label="Close"
//       >
//         ×
//       </button>
//       {/* Overlay info bottom-left */}
//       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#221c3acc] to-transparent rounded-b-2xl p-5">
//         <h3 className="text-2xl font-bold text-[#b39ddb] mb-2">
//           {selectedToken.name} <span className="text-[#d1c4e9]">({selectedToken.symbol})</span>
//         </h3>
//         <div className="mb-1">
//           <strong className="text-[#b39ddb]">Mint:</strong>
//           <span className="break-all text-xs text-gray-200 ml-2">{selectedToken.mint}</span>
//           <button
//             onClick={() => {
//               navigator.clipboard.writeText(selectedToken.mint);
//               notify({ type: "success", message: "Copied mint address to clipboard" });
//             }}
//             className="ml-2 bg-[#6c47e6] hover:bg-[#7e57c2] text-xs text-white px-2 py-1 rounded"
//           >
//             Copy
//           </button>
//         </div>
//         <div className="mb-1">
//           <strong className="text-[#b39ddb]">Metadata:</strong>
//           <span className="break-all text-xs text-gray-200 ml-2">{selectedToken.uri}</span>
//         </div>
//         <div className="mt-3 flex gap-2">
//           <a
//             href={`https://explorer.solana.com/address/${selectedToken.mint}`}
//             target="_blank"
//             rel="noreferrer"
//             className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
//           >
//             View on Solana
//           </a>
//           <button
//             onClick={() => handleBuy(selectedToken)}
//             className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
//           >
//             Buy 0.1 SOL
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )}
//       </div>
//     </section>
//   );
// };

// export default TokenGallery;


import React, { useEffect, useState } from "react";
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import {
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import { notify } from "../utils/notifications";
import { LuArrowRightFromLine } from "react-icons/lu";
import Head from "next/head";

interface Token {
  name: string;
  symbol: string;
  image: string;
  uri: string;
  mint: string;
}

const SELLER_WALLET = new PublicKey("7EJxxpqPAifQd5zCPhDKTjeaUdcnBK3YFJpxcnochYzn");

const TokenGallery: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
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
      notify({
      type: "error",
      message: "Please connect your wallet",
      description: "You must connect a wallet to proceed with this action.",
    });

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
  description: "Transaction successful. You can track the transfer on Solana Explorer.",
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

  return (
    <section className="relative z-50 py-16 rounded-3xl bg-gradient-to-br bg-[#060e26] via-purple-950 to-black min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-extrabold mb-12 text-center tracking-wide drop-shadow-lg">
          Tokens & NFTs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[...tokens, ...nfts].slice(0, 6).map((item, idx) => (
            <div
              key={idx}
              className="bg-[#221c3a] rounded-2xl shadow-xl border-0 p-1 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-60 w-full rounded-2xl overflow-hidden shadow-xl bg-[#221c3a]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#221c3acc] to-transparent p-4">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow">
                    {item.name}
                    <span className="text-base text-[#b39ddb] font-normal ml-2">
                      ({item.symbol})
                    </span>
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

        {/* Nút xem tất cả */}
        {(tokens.length + nfts.length) > 5 && (
          <div className="flex justify-center mt-8">
            <a
              href="/gallery"
              className="hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
            >
              View all Token & NFT
              <LuArrowRightFromLine />
            </a>
          </div>
        )}

        {/* Modal chi tiết + JSON-LD */}
        {selectedToken && (
          <>
            <Head>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: selectedToken.name,
                    image: selectedToken.image,
                    description: `Solana token/NFT ${selectedToken.name} (${selectedToken.symbol})`,
                    sku: selectedToken.symbol,
                    identifier: {
                      "@type": "PropertyValue",
                      propertyID: "solana:mint",
                      value: selectedToken.mint,
                    },
                    url: `https://explorer.solana.com/address/${selectedToken.mint}`,
                    additionalProperty: [
                      {
                        "@type": "PropertyValue",
                        name: "Metadata URI",
                        value: selectedToken.uri,
                      },
                    ],
                  }),
                }}
              />
            </Head>

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
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#221c3acc] to-transparent rounded-b-2xl p-5">
                  <h3 className="text-2xl font-bold text-[#b39ddb] mb-2">
                    {selectedToken.name}{" "}
                    <span className="text-[#d1c4e9]">({selectedToken.symbol})</span>
                  </h3>
                  <div className="mb-1">
                    <strong className="text-[#b39ddb]">Mint:</strong>
                    <span className="break-all text-xs text-gray-200 ml-2">
                      {selectedToken.mint}
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedToken.mint);
                        notify({
                          type: "success",
                          message: "Copied mint address to clipboard",
                        });
                      }}
                      className="ml-2 bg-[#6c47e6] hover:bg-[#7e57c2] text-xs text-white px-2 py-1 rounded"
                    >
                      Copy
                    </button>
                  </div>
                  <div className="mb-1">
                    <strong className="text-[#b39ddb]">Metadata:</strong>
                    <span className="break-all text-xs text-gray-200 ml-2">
                      {selectedToken.uri}
                    </span>
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
          </>
        )}
      </div>
    </section>
  );
};

export default TokenGallery;
