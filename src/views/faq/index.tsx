// import {FC} from "react";
// export const FaqView: FC = ({}) => {
// const questions = [
//   {
//     question: " Who are produces sit pleasure?",
//     answer:
//       " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     id: "faq-1",
//   },
//   {
//     question: " What is quo voluptas nulla pariatur?",
//     answer:
//       "Vivamus elementum semper nisi. Aenean vulputate eleifendtellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
//     id: "faq-2",
//   },
//   {
//     question: "How to do transactions using iMbank?",
//     answer:
//       " Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     id: "faq-3",
//   },
//   {
//     question: " hot to activate iMbank service?",
//     answer:
//       "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     id: "faq-4",
//   },
//   {
//     question: "  Who is eligible to open iMbank account?",
//     answer:
//       "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     id: "faq-5",
//   },
//   {
//     question: "wil i be given a passbook?",
//     answer:
//       "Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
//     id: "faq-6",
//   },
// ];

// return (
//   <section id ="faq" className="py-20">
//     <div className=" relative z-50 container">
//       <div className="mb-10 flex items-end justify-between">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="mb-4 text-3xl font-medium capitalize text-white">
//             Any Question
//           </h2>
//           <p className="text-default-200 text-sm font-medium">
//             Ask freely. Learn deeply. Build on Solana.          
//           </p>
//         </div>
//       </div>
//       <div className="mx-auto max-w-3xl">
//         <div className="hs-according-group space-y-4">
//           {
//             questions.map((question, index) =>(
//               <div key ={index} className={`hs-accordion bg-dafault-950/40 overflow-hidden
//               rounded-lg border border-white/10 backdrop-blur-3xl`}
//               id={question.id}>
//                 <button className="hs-accordion-toggle inline-flex items-center
//                 justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
//                 aria-controls={`faq-accordion-${index + 1}`}>
//                   <h5 className="flex text-base font-semibold">
//                     <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
//                     {question.question}
//                   </h5>
//                   <i className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"></i>
//                 </button>
//                 <div id={`faq-accordion-${index + 1}`} className="hs-accordion-content w-full overflow-hidden
//                 transition-[height] duration-300" aria-labelledby={question.id}>
//                   <div className="px-6 pb-4 pt-0">
//                     <p className="text-default-300 mb-2 text-sm font-medium">
//                       {question.answer}
//                     </p>
//                     <p className="text-default-300 text-sm font-medium">
//                       Have you ever wanted to become blockchain developer check theo pro NFT Marketplace Course
//                     </p>
//                   </div>
//                 </div>
//                 </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   </section>

// )

// }

import { FC, useState } from "react";

export const FaqView: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is Solana and why should I use it?",
      answer:
        "Solana is a high-performance blockchain known for its fast transactions and low fees. It’s ideal for building scalable Web3 apps, DeFi platforms, and NFTs.",
      id: "faq-1",
    },
    {
      question: "How do I connect my wallet to this site?",
      answer:
        "Click the 'Connect Wallet' button on the top right corner and choose your preferred wallet (like Phantom or Solflare). Make sure your browser extension is installed.",
      id: "faq-2",
    },
    {
      question: "Which wallets are supported on Solana?",
      answer:
        "Popular wallets include Phantom, Solflare, Backpack, and Ledger. All these wallets are compatible with Solana-based apps and tokens.",
      id: "faq-3",
    },
    {
      question: "How can I create a new Solana wallet?",
      answer:
        "You can create a Solana wallet by downloading the Phantom or Solflare app, then following the setup instructions to generate a secure recovery phrase.",
      id: "faq-4",
    },
    {
      question: "Why is my token not showing up in the wallet?",
      answer:
        "Sometimes tokens need to be added manually. Check if the token address is correct, and click 'Add Token' in your wallet to make it visible.",
      id: "faq-5",
    },
    {
      question: "How do I send and receive Solana tokens?",
      answer:
        "To send tokens, open your wallet, select the token, enter the recipient’s address, and confirm. To receive, share your wallet address or QR code.",
      id: "faq-6",
    },
  ];

  return (
    // <section id="faq" className="py-20">
    //   <div className="relative z-50 container">
    //     <div className="mb-10 flex items-end justify-between">
    //       <div className="mx-auto max-w-2xl text-center">
    //         <h2 className="mb-4 text-3xl font-medium capitalize text-white">
    //           Any Question
    //         </h2>
    //         <p className="text-default-200 text-sm font-medium">
    //           Ask freely. Learn deeply. Build on Solana.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="mx-auto max-w-3xl">
    //       <div className="space-y-4">
    //         {questions.map((question, index) => (
    //           <div
    //             key={index}
    //             className="bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl"
    //           >
    //             <button
    //               onClick={() => toggleQuestion(index)}
    //               className="w-full inline-flex items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
    //             >
    //               <h5 className="flex text-base font-semibold">
    //                 <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
    //                 {question.question}
    //               </h5>
    //               <span
    //                 className={`transform transition-transform duration-300 ${
    //                   openIndex === index ? "rotate-180" : ""
    //                 }`}
    //               >
    //                 ▼
    //               </span>
    //             </button>
    //             {openIndex === index && (
    //               <div className="px-6 pb-4 pt-0">
    //                 <p className="text-default-300 mb-2 text-sm font-medium">
    //                   {question.answer}
    //                 </p>
    //                 <p className="text-default-300 text-sm font-medium">
    //                   Have you ever wanted to become a blockchain developer? Check the pro NFT Marketplace Course.
    //                 </p>
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
  id="faq"
  className="py-20"
  itemScope
  itemType="https://schema.org/FAQPage"
>
  <div className="relative z-50 container">
    <header className="mb-10 flex items-end justify-center">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-medium capitalize text-white">
          Any Question
        </h2>
        <p className="text-default-200 text-sm font-medium">
          Ask freely. Learn deeply. Build on Solana.
        </p>
      </div>
    </header>

    <div className="mx-auto max-w-3xl">
      <div className="space-y-4">
        {questions.map((question, index) => (
          <article
            key={index}
            itemProp="mainEntity"
            itemScope
            itemType="https://schema.org/Question"
            className="bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl"
          >
            <button
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              className="w-full inline-flex items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all"
            >
              <h3 className="flex text-base font-semibold" itemProp="name">
                <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
                {question.question}
              </h3>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                itemProp="acceptedAnswer"
                itemScope
                itemType="https://schema.org/Answer"
                className="px-6 pb-4 pt-0"
              >
                <p
                  itemProp="text"
                  className="text-default-300 mb-2 text-sm font-medium"
                >
                  {question.answer}
                </p>
                <p className="text-default-300 text-sm font-medium">
                  Have you ever wanted to become a blockchain developer? Check the pro NFT Marketplace Course.
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};
