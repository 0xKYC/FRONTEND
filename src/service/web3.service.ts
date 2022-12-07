// metamask connect wallet function in react
import { ethers } from "ethers";
import { useState, useEffect } from "react";

export function connectMetamask() {
  if (window.ethereum) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: any[]) => {
        accountChangedHandler(accounts[0]);
      })
      .catch((err: any) => {
        console.log(err);
      });
  } else {
    console.log("Please install MetaMask!");
  }
}
export function accountChangedHandler(account: string) {}

export function getUserBalance() {}
