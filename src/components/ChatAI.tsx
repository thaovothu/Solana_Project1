// import React, { useState } from "react";
// import { FaRobot } from "react-icons/fa";

// export default function AIChat() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const faq = [
//     {
//   question: "How do I prepare to create a token?",
//   answer: `To create a token, you must have a Phantom wallet account. If you don't have a wallet, create one.

//       1. If you already have a wallet, log in to the wallet and click 'select wallet' on the Home page introduction.
//       2. Click 'Phantom', and your wallet will be linked.
//       3. Click on 'Tool' in the header or scroll down to 'Solana Powerful Tools' to see the first item 'Create Token & NFT'.
//       4. Select 'Token' in the right corner to create a token. You can also select 'NFT' to create an NFT.`,
//       },
//       {
//         question: "What happens after I click 'Create Token'?",
//         answer: `1. Enter Token information and click "Create Token".
//       2. You will pay for the amount of Token you want to put on the web, or note the remaining account balance.
//       3. After payment, your token will be loaded on all communication sites to see.`,
//       },
//       {
//         question: "How do I connect my wallet?",
//         answer: "Click the 'Connect Wallet' button at the top right and select your wallet provider."
//       },
//     {
//       question: "How do I buy a token?",
//       answer: `1. Connect your wallet.
//     2. Click "Gallery" in the header, or scroll down to the "Tokens & NFTs" section.
//     3. View product details by clicking "View Detail".
//     4. Click "Buy 0.1 SOL" and confirm the transaction in your wallet.
//     5. Once the payment is completed, wait for the seller to send the token to your wallet.`,
//     },
//     // Add more FAQs as needed
//   ];

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     setMessages((prev) => [...prev, { role: "user", content: input }]);
//     setLoading(true);

//     const found = faq.find(f =>
//       f.question.toLowerCase() === input.trim().toLowerCase()
//     );
//     if (found) {
//       setMessages((prev) => [...prev, { role: "assistant", content: found.answer }]);
//       setInput("");
//       setLoading(false);
//       return;
//     }

//     const res = await fetch("/api/gemini-chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question: input }),
//     });
//     const data = await res.json();
//     setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
//     setInput("");
//     setLoading(false);
//   };

//   const sendMessageWithPredefined = async (question: string) => {
//     setMessages((prev) => [...prev, { role: "user", content: question }]);
//     setLoading(true);

//     const found = faq.find(f =>
//       f.question.toLowerCase() === question.trim().toLowerCase()
//     );
//     if (found) {
//       setMessages((prev) => [...prev, { role: "assistant", content: found.answer }]);
//       setLoading(false);
//       return;
//     }

//     const res = await fetch("/api/gemini-chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });
//     const data = await res.json();
//     setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
//     setLoading(false);
//   };

//   if (!open)
//     return (
//       <button
//         className="fixed bottom-6 right-6 bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl z-[200] border-4 border-primary/30"
//         onClick={() => setOpen(true)}
//         aria-label="Open AI Chat"
//       >
//         <FaRobot />
//       </button>
//     );

//   return (
//     <div className="fixed bottom-6 right-6 w-96 max-w-[95vw] bg-default-950 rounded-2xl shadow-2xl z-[200] flex flex-col border border-primary/30">
//       <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-primary/20 rounded-t-2xl">
//         <div className="flex items-center gap-2 text-primary font-bold text-lg">
//           <FaRobot /> AI Chat
//         </div>
//         <button
//           className="text-primary hover:text-white text-2xl"
//           onClick={() => setOpen(false)}
//           aria-label="Close"
//         >
//           ×
//         </button>
//       </div>

//       <div className="flex-1 h-72 max-h-72 overflow-y-auto px-4 py-2 bg-default-950">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`mb-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
//           >
//             {/* <div
//               className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
//                 msg.role === "user"
//                   ? "bg-primary text-white"
//                   : "bg-primary/20 text-primary-foreground"
//               }`}
//             >
//               {msg.content}
//             </div> */}
//             <div
//   className={`px-3 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-line ${
//     msg.role === "user"
//       ? "bg-primary text-white"
//       : "bg-primary/20 text-primary-foreground"
//   }`}
// >
//   {msg.content}
// </div>

//           </div>
//         ))}
//         {loading && (
//           <div className="text-primary text-sm mb-2">AI is typing...</div>
//         )}

//         {messages.length === 0 && (
//           <div className="p-3 space-y-2">
//             <div className="text-primary-foreground font-semibold text-sm mb-1">
//               Suggested questions:
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {faq.map((item, idx) => (
//                 <button
//                   key={idx}
//                   className="text-sm bg-primary/10 hover:bg-primary/30 text-primary px-3 py-1 rounded-full transition"
//                   onClick={() => sendMessageWithPredefined(item.question)}
//                 >
//                   {item.question}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="flex gap-2 p-3 border-t border-primary/20 bg-default-950 rounded-b-2xl">
//         <input
//           className="flex-1 border border-primary/30 bg-default-950 rounded px-3 py-2 text-sm text-white focus:outline-none"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={e => e.key === "Enter" && sendMessage()}
//           placeholder="Ask anything..."
//           disabled={loading}
//         />
//         <button
//           className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded font-semibold"
//           onClick={sendMessage}
//           disabled={loading}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestionsCollapsed, setSuggestionsCollapsed] = useState(false);

  const faq = [
    {
      question: "How do I prepare to create a token?",
      answer: `To create a token, you must have a Phantom wallet account. If you don't have a wallet, create one.

1. Log in and click 'select wallet' on Home.
2. Click 'Phantom' to link.
3. Go to 'Tool' > 'Create Token & NFT'.
4. Select 'Token' to create.`,
    },
    {
      question: "What happens after I click 'Create Token'?",
      answer: `1. Enter Token info > click "Create Token".
2. Pay for token amount or check balance.
3. After payment, your token will be visible.`,
    },
    {
      question: "How do I connect my wallet?",
      answer: "Click the 'Connect Wallet' button at the top right and choose a provider.",
    },
    {
      question: "How do I buy a token?",
      answer: `1. Connect your wallet.
2. Click "Gallery" or scroll to "Tokens & NFTs".
3. View detail > click "Buy 0.1 SOL".
4. Confirm in wallet.
5. Wait for seller to send token.`,
    },
    {
    question: "How do I copy my token address?",
    answer: "After creating a token or NFT, click the 'Copy' button next to the token address."
  },
  ];

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);
    setSuggestionsCollapsed(true);

    const found = faq.find(f =>
      f.question.toLowerCase() === input.trim().toLowerCase()
    );
    if (found) {
      setMessages((prev) => [...prev, { role: "assistant", content: found.answer }]);
      setInput("");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/gemini-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
    setInput("");
    setLoading(false);
  };

  const sendMessageWithPredefined = async (question: string) => {
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setLoading(true);
    setSuggestionsCollapsed(true);

    const found = faq.find(f =>
      f.question.toLowerCase() === question.trim().toLowerCase()
    );
    if (found) {
      setMessages((prev) => [...prev, { role: "assistant", content: found.answer }]);
      setLoading(false);
      return;
    }

    const res = await fetch("/api/gemini-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "assistant", content: data.answer }]);
    setLoading(false);
  };

  if (!open)
    return (
      <button
        className="fixed bottom-6 right-6 bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl z-[200] border-4 border-primary/30"
        onClick={() => setOpen(true)}
        aria-label="Open AI Chat"
      >
        <FaRobot />
      </button>
    );

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-[95vw] bg-default-950 rounded-2xl shadow-2xl z-[200] flex flex-col border border-primary/30">
      <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-primary/20 rounded-t-2xl">
        {/* <div className="flex items-center gap-2 text-primary font-bold text-lg">
          <FaRobot /> AI Chat
        </div> */}
        <div className="flex items-center gap-2 text-primary font-bold text-lg relative">
  <FaRobot /> AI Chat

  {messages.length > 0 && (
    <button
      className="ml-2 text-primary hover:text-white transition"
      onClick={() => setSuggestionsCollapsed(prev => !prev)}
      title={suggestionsCollapsed ? "Show suggestions" : "Hide suggestions"}
    >
      <FiHelpCircle size={18} />
    </button>
  )}
</div>

        <button
          className="text-primary hover:text-white text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="flex-1 h-72 max-h-72 overflow-y-auto px-4 py-2 bg-default-950 relative">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[80%] text-sm whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-primary text-white"
                  : "bg-primary/20 text-primary-foreground"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-primary text-sm mb-2">AI is typing...</div>
        )}

        {messages.length === 0 && (
          <div className="p-3 space-y-2">
            <div className="text-primary-foreground font-semibold text-sm mb-1">
              Suggested questions:
            </div>
            <div className="flex flex-wrap gap-2">
              {faq.map((item, idx) => (
                <button
                  key={idx}
                  className="text-sm bg-primary/10 hover:bg-primary/30 text-primary px-3 py-1 rounded-full transition"
                  onClick={() => sendMessageWithPredefined(item.question)}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sau khi đã có message, gợi ý sẽ thu gọn thành icon */}
        {messages.length > 0 && !suggestionsCollapsed && (
          <div className="absolute bottom-2 left-2 z-10 bg-default-900 p-2 rounded-xl shadow-lg max-w-[85%]">
            <div className="text-primary-foreground font-semibold text-xs mb-1">
              Suggested:
            </div>
            <div className="flex flex-wrap gap-2">
              {faq.map((item, idx) => (
                <button
                  key={idx}
                  className="text-xs bg-primary/10 hover:bg-primary/30 text-primary px-2 py-1 rounded-full transition"
                  onClick={() => sendMessageWithPredefined(item.question)}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2 p-3 border-t border-primary/20 bg-default-950 rounded-b-2xl">
        <input
          className="flex-1 border border-primary/30 bg-default-950 rounded px-3 py-2 text-sm text-white focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Ask anything..."
          disabled={loading}
        />
        <button
          className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded font-semibold"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
