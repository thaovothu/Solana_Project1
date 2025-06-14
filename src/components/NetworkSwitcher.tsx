import {FC} from "react";
import dynamic from "next/dynamic";

import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";
import NetworkSwitcher from "./SVG/NetworkSwitcherSVG";
const NetworkSwitcherComponent: FC = () => {
  const {networkConfiguration, setNetworkConfiguration} = 
  useNetworkConfiguration();
  return (
  <form aria-label="Network Selector">
    <fieldset>
      <legend className="sr-only">Select Solana Network</legend>
      
      <label htmlFor="network-select" className="text-white font-medium mr-2">
        Network:
      </label>
      <select
        id="network-select"
        value={networkConfiguration}
        onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")}
        className="select max-w-xs border-none bg-transparent outline-0"
      >
        <option value="mainnet-beta">Mainnet</option>
        <option value="devnet">Devnet</option>
        <option value="testnet">Testnet</option>
      </select>
    </fieldset>
  </form>
);

};
export default dynamic(() => Promise.resolve(NetworkSwitcherComponent),{
  ssr:false,
});