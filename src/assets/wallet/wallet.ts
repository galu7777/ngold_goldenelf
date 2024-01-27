import { FC } from "react";

interface Props {
    walletAddress?: string | any
    setWalletAddress?: any
    window?: any
}

//Requerir accesso a la WALLET de META MASK del usuario
export const requestAccount:FC<Props> = async ({walletAddress,setWalletAddress,window}): Promise<undefined > => {
    if (walletAddress.length) return;

    if (window?.ethereum) {
      try {
        const accounts = await window?.ethereum.request({
          method: "eth_requestAccounts",
        })
        setWalletAddress(accounts[0]);
      } catch (e: any) {
        console.log(e.message);
        return 
      }
    } else {
      return ;
    }
  }