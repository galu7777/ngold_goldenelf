"use client"

import { ethers } from "ethers";
import { useState } from "react";

export default function Home() {

  const [walletAddress,setWalletAddress] = useState("")

  //Requerir accesso a la WALLET de META MASK del usuario
  async function requestAccount () {
    if(window?.ethereum){    
      try {
        const accounts = await window?.ethereum.request({
          method: "eth_requestAccounts"
        })
        setWalletAddress(accounts[0])
        console.log(accounts);
        
      } catch (e:any) {
        console.log(e.message);
        
      }

    }  else {
      console.log("nel")
    }
  }

  //funcion para interactuar con el smart
  async function conectWallet(){
    if(typeof window.ethereum !== "undefined"){
      await requestAccount()
      //const provider = new ethers.providers.Web3Provider(window?.ethereum)  
      }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button onClick={()=>requestAccount()} className="h-[4rem] w-[10rem] border-[#ffffff] border-solid border-[1px]" >Metamask</button>
      <h3>Wallet Address: {walletAddress}</h3>
    </main>
  )
}
