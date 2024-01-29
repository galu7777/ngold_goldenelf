import { FC } from "react";
// import Web3 from "web3";
// import abi from './abi.json';

interface Props {
  walletAddress?: string | any;
  setWalletAddress?: any;
  window?: any;
}

// Requerir acceso a la WALLET de META MASK del usuario
export const requestAccount: FC<Props> = async ({
  walletAddress,
  setWalletAddress,
  window,
}): Promise<undefined> => {
  if (walletAddress.length) return;

  if (window?.ethereum) {
    try {
      const accounts = await window?.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);

      // const web3 = new Web3(window.ethereum);
      // const contractAddress = "0x48427bFCCfffad01cd207939067a81dD3Bbc5E4a";
      // const contractAbi = abi.abi;
      // const contract = new web3.eth.Contract(contractAbi, contractAddress)

      // const info = await contract.methods.infoSmartContract().call();
      // console.log('Info: ', info)

      // const response = await contract.methods
      //   .createRandomArtWork("NFTNombre")
      //   .send({ from: accounts[0], value: web3.utils.toWei("0.1", "ether") });

      // console.log("Respuesta de Transacción: ", response);
    } catch (e: any) {
      console.log(e.message);
      return;
    }
  } else {
    console.log("MetaMask no detectado");
    return;
  }
};
