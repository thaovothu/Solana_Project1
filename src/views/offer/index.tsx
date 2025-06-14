// import React, {FC} from 'react'

// export const OfferView: FC = ({}) => {
//   return <section id="features" className="py-20" itemScope itemType="https://schema.org/WebPageElement">
//   <div className="relative z-50 container">
//     <div className="mb-10 flex items-end justify-between">
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="mb-4 text-3xl font-medium capitalize text-white" itemProp="name">
//           Solana token Popularity
//         </h2>
//         <p className="text-default-200 text-sm font-medium" itemProp="description">
//           Start working with solana token creator, It allow you to create solan token by createTracing, deploying, airdrop, transfering and updating token 
//         </p>
//       </div>
//     </div>

//     <div className="grid gap-6 lg:grid-cols-3">
//       {[
//         {
//           title: "All-in-One Token Toolkit",
//           desc: "From minting to metadata updates, our creator tool provides everything you need to launch and manage your Solana token project seamlessly",
//         },
//         {
//           title: "Instant Airdrop Utility",
//           desc: "Distribute your tokens instantly to users with our built-in airdrop feature. Perfect for testing, giveaways, or community rewards.",
//         },
//         {
//           title: "No-Code Token Deployment",
//           desc: "No coding required. Launch your Solana token with a user-friendly interface that handles all the technical steps for you.",
//         },
//         {
//           title: "Secure & Scalable",
//           desc: "Built on top of Solana’s high-speed blockchain, your tokens are secure, fast, and ready to scale with your project.",
//         },
//         {
//           title: "Real-Time Token Management",
//           desc: "Update metadata, transfer tokens, and monitor balances in real-time with our intuitive dashboard.",
//         },
//         {
//           title: "Developer-Friendly Integration",
//           desc: "Need more control? Export your token data and integrate with your own dApps or smart contracts effortlessly.",
//         },
//       ].map((item, index) => (
//         <article
//           key={index}
//           className="space-y-6"
//           itemScope
//           itemType="https://schema.org/Service"
//         >
//           <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
//             <div className="p-10">
//               <meta itemProp="provider" content="Solana Token Creator" />
//               <h3
//                 className="mb-4 mt-8 text-2xl font-medium text-white"
//                 itemProp="name"
//               >
//                 {item.title}
//               </h3>
//               <p
//                 className="text-default-100 mb-4 text-sm font-medium"
//                 itemProp="description"
//               >
//                 {item.desc}
//               </p>
//               <a
//                 href="#"
//                 className="text-primary group relative inline-flex items-center gap-2"
//                 itemProp="url"
//               >
//                 <span
//                   className="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"
//                 >
//                   Read More
//                   <i className="h-4 w-4"></i>
//                 </span>
//               </a>
//             </div>
//           </div>
//         </article>
//       ))}
//     </div>
//   </div>
// </section>

// }

import React, { FC, useState } from "react";

const offers = [
  {
    title: "All-in-One Token Toolkit",
    desc: "From minting to metadata updates, our creator tool provides everything you need to launch and manage your Solana token project seamlessly.",
    details: "This toolkit provides a unified interface for creating, minting, updating, and managing your Solana tokens. You can handle supply, metadata, and distribution all in one place, saving time and reducing errors.",
    features: [
      "Mint new tokens with custom supply and decimals",
      "Update token metadata anytime",
      "Burn or mint additional supply",
      "Integrated with Solana wallet adapters",
    ],
    link: "https://docs.solana.com/token-toolkit"
  },
  {
    title: "Instant Airdrop Utility",
    desc: "Distribute your tokens instantly to users with our built-in airdrop feature. Perfect for testing, giveaways, or community rewards.",
    details: "Easily airdrop tokens to any number of wallets. Import wallet addresses via CSV, set the amount per wallet, and execute the airdrop in seconds. Track airdrop history and status for transparency.",
    features: [
      "Bulk airdrop to thousands of wallets",
      "CSV import/export for wallet lists",
      "Airdrop status and history tracking",
      "Customizable airdrop amounts",
    ],
    link: "https://docs.solana.com/airdrop"
  },
  {
    title: "No-Code Token Deployment",
    desc: "No coding required. Launch your Solana token with a user-friendly interface that handles all the technical steps for you.",
    details: "Deploy tokens on Solana without writing a single line of code. The intuitive UI guides you through every step, from setting up supply and decimals to uploading images and descriptions.",
    features: [
      "Step-by-step deployment wizard",
      "Automatic transaction signing",
      "Upload images and metadata easily",
      "Preview token before deployment",
    ],
    link: "https://solana.com/developers"
  },
  {
    title: "Secure & Scalable",
    desc: "Built on top of Solana’s high-speed blockchain, your tokens are secure, fast, and ready to scale with your project.",
    details: "All token operations are executed on the Solana blockchain, ensuring security and scalability. Benefit from Solana’s low fees and high throughput for all your token needs.",
    features: [
      "Blockchain-level security",
      "Fast transaction processing",
      "Low network fees",
      "Scalable for large projects",
    ],
    link: "https://solana.com/technology"
  },
  {
    title: "Real-Time Token Management",
    desc: "Update metadata, transfer tokens, and monitor balances in real-time with our intuitive dashboard.",
    details: "Manage your tokens with live updates. Instantly see balance changes, transfer tokens, and update metadata. The dashboard provides a clear overview of all your assets and activities.",
    features: [
      "Live balance and transaction updates",
      "Easy token transfers",
      "Metadata editing in real-time",
      "Comprehensive activity logs",
    ],
    link: "https://solana.com/token-management"
  },
  {
    title: "Developer-Friendly Integration",
    desc: "Need more control? Export your token data and integrate with your own dApps or smart contracts effortlessly.",
    details: "Export token data in various formats for use in your own decentralized applications. Access developer APIs and SDKs for advanced integrations and automation.",
    features: [
      "Export token data as JSON or CSV",
      "RESTful APIs and SDKs available",
      "Webhooks for real-time notifications",
      "Comprehensive developer documentation",
    ],
    link: "https://solana.com/developers"
  },
];

export const OfferView: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-20" itemScope itemType="https://schema.org/WebPageElement">
      <div className="relative z-50 container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white" itemProp="name">
              Solana Token Popularity
            </h2>
            <p className="text-default-200 text-sm font-medium" itemProp="description">
              Start working with solana token creator. It allows you to create Solana tokens by minting, deploying, airdropping, transferring, and updating tokens.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offers.map((item, index) => (
            <article
              key={index}
              className="space-y-6"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="bg-default-950/40 hover:-translate-y-2 border-primary border-s-2 rounded-xl backdrop-blur-3xl transition-all duration-500">
                <div className="p-10">
                  <meta itemProp="provider" content="Solana Token Creator" />
                  <h3 className="mb-4 mt-8 text-2xl font-medium text-white" itemProp="name">
                    {item.title}
                  </h3>
                  <p className="text-default-100 mb-4 text-sm font-medium" itemProp="description">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="text-primary group relative inline-flex items-center gap-2 font-semibold"
                  >
                    See More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal with more details */}
        {openIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-2 text-[#6c47e6]">{offers[openIndex].title}</h3>
              <p className="text-gray-700 mb-2">{offers[openIndex].desc}</p>
              <p className="text-gray-600 mb-4">{offers[openIndex].details}</p>
              {offers[openIndex].features && (
                <ul className="list-disc pl-5 mb-4 text-gray-700">
                  {offers[openIndex].features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}
              {offers[openIndex].link && (
                <a
                  href={offers[openIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6c47e6] underline font-semibold"
                >
                  Learn more
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};