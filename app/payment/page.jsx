"use client";
import React from "react";
import games from "@/game store datas/data/data";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentsIcon from "@mui/icons-material/Payments";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Image from "next/image";
const page = () => {
  //turn into array so it can map with them
  const gameArrays = Object.keys(games).map((key) => ({
    name: key,
    ...games[key],
  }));
  return (
    <div className="gap-5 pt-8 flex justify-center">
      <div className="w-1/2 min-h-screen bg-sky-800 pt-8 flex flex-col items-center">
        <div className="w-96 h-96 relative">
          <Image src="/userProfile.jpg" alt="game" fill objectFit="cover" />
        </div>
        <h1 className="text-white text-2xl font-extrabold pt-8">
          Your Total Order: <span className="text-yellow-400">$1065.97</span>
        </h1>
        <h1 className="text-red-300 text-2xl font-extrabold pt-8">
          Choose Payment Method:
        </h1>

        <label className="flex gap-5 pt-8 ">
          <input type="radio" name="payment" className="w-6" />
          <div className="flex gap-5">
            <AccountBalanceWalletIcon
              fontSize="large"
              className="text-sky-200"
            />
            <p className="text-white text-2xl font-semibold">
              Your Balance: <span className="text-yellow-500">$9999.00</span>
            </p>
          </div>
        </label>
        <label className="flex gap-5 pt-8">
          <input type="radio" name="payment" className="w-6" />
          <div className="flex gap-5">
            <PaymentsIcon fontSize="large" className="text-green-400" />
            <p className="text-white text-2xl font-semibold">Online Banking</p>
          </div>
        </label>
        <label className="flex gap-5 py-8">
          <input type="radio" name="payment" className="w-6" />
          <div className="flex gap-5">
            <CreditCardIcon fontSize="large" className="text-yellow-400" />
            <p className="text-white text-2xl font-semibold">
              Credit Card/Debit Card
            </p>
          </div>
        </label>
        <button className="p-2 border-4 border-sky-400 bg-sky-300 hover:bg-sky-600 active:bg-sky-800">
          <h1 className="text-white font-extrabold text-2xl">
            Continue To Payment
          </h1>
        </button>
      </div>
    </div>
  );
};

export default page;
