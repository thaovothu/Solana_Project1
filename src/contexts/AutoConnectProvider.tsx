import { useLocalStorage }   from "@solana/wallet-adapter-react";
import {FC,createContext, ReactNode, useContext} from "react";
export interface AutoConnectContextState{
  autoConnect : boolean;
  setAutoConnect( autoConnect : boolean): void;
}
export const AutoConnectContext = createContext <AutoConnectContextState>(
  {} as AutoConnectContextState
)

export function useAutoConnect(): AutoConnectContextState
{
  return useContext(AutoConnectContext);
}

export const AutoConnectProvider : FC<{children :ReactNode }> = ({ children }) => {
  const [autoConnect, setAutoConnect] = useLocalStorage("autoConnect", true);

  return (
    <AutoConnectContext.Provider value={{ autoConnect, setAutoConnect }}>
      {children}
    </AutoConnectContext.Provider>
  );
};




// import { useLocalStorage } from "@solana/wallet-adapter-react";
// import { FC, createContext, ReactNode, useContext } from "react";

// export interface AutoConnectContextState {
//   autoConnect: boolean;
//   setAutoConnect(autoConnect: boolean): void;
// }

// export const AutoConnectContext = createContext<AutoConnectContextState>(
//   {} as AutoConnectContextState
// );

// export function useAutoConnect(): AutoConnectContextState {
//   return useContext(AutoConnectContext);
// }

// export const AutoConnectProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   const [autoConnect, setAutoConnect] = useLocalStorage("autoConnect", true);
//   return (
//     <AutoConnectContext.Provider value={{ autoConnect, setAutoConnect }}>
//       {children}
//     </AutoConnectContext.Provider>
//   );
// };
