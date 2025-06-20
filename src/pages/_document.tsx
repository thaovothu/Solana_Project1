// // pages/_document.tsx
// import Document,
//  {DocumentContext, Head, Html, Main, NextScript} from  "next/document"; 

// class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await Document.getInitialProps(ctx);
//     return initialProps;
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           {/* <link rel ="icon" href = "/favicon.ico" /> */}
         
//         <link rel="icon" href="/favicon.ico" />



//         </Head>
        
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}