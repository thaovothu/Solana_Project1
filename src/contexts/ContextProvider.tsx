import {WalletAdapterNetwork, WalletError} from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {WalletModalProvider as ReactUIWalletModalProvider} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {Cluster, clusterApiUrl} from "@solana/web3.js";
import {Children, FC, ReactNode, useCallback, useMemo} from "react";
import {AutoConnectProvider, useAutoConnect} from "./AutoConnectProvider";
import {notify} from "../utils/notifications";
import {
  NetworkConfigurationProvider,
  useNetworkConfiguration,
} from "./NetworkConfigurationProvider";
// import cluster from "cluster";

const WalletContextProvider : FC<{children:ReactNode}> =  ({children}) => 
{
  const {autoConnect} = useAutoConnect();
  const {networkConfiguration} = useNetworkConfiguration();
  const network = networkConfiguration as WalletAdapterNetwork;

  const originalEndPoint = useMemo (() => clusterApiUrl(network),[network]);

  let endpoint;

  if (network == "mainnet-beta")
  {
    endpoint ="https://solana-mainnet.g.alchemy.com/v2/iTh39wcx9G91kxqCe2022";
  }
  else if (network =="devnet")
  {
    endpoint = originalEndPoint;
  }
  else endpoint = originalEndPoint;

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletExtensionWalletAdapter(),
      new SolletWalletAdapter(),
      new TorusWalletAdapter(),
    ], [network]
  );

  const onError = useCallback ((error : WalletError)=>
  {
    notify({
  type: "error",
  message: error.message ? `${error.name}: ${error.message}` : error.name,
  description: "Something went wrong with your wallet connection.",
});

    console.error(error);
  }, []);

  return <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets = {wallets} onError={onError} autoConnect={autoConnect}>
      <ReactUIWalletModalProvider> {children} </ReactUIWalletModalProvider>
    </WalletProvider>
     </ConnectionProvider>;
  
}
export const ContextProvider : FC <{children: ReactNode }> = ({children}) => {
  return (
    <>
    <NetworkConfigurationProvider>
      <AutoConnectProvider>
        <WalletContextProvider>{children}</WalletContextProvider>
      </AutoConnectProvider>
    </NetworkConfigurationProvider>
    </>
  )
}