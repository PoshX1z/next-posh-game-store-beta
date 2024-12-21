import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <div className="pt-8">
      <div className="bg-gradient-to-bl from-blue-500 via-sky-500 to-indigo-600 p-8 w-full h-screen rounded-lg flex flex-col items-center gap-8">
        <div className="w-96 h-96 relative">
          <Image
            src="/userProfile.jpg"
            alt="dede"
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h1 className="text-white text-3xl font-extrabold">PoshX1z</h1>
        <div className="text-white text-2xl font-semibold flex flex-col gap-5">
          <p>
            First Name: <span className="text-red-200">Pratchaya</span>{" "}
          </p>
          <p>
            Last Name: <span className="text-red-200">Leelanuwat</span>{" "}
          </p>
          <p>
            Email: <span className="text-red-200">xdante1357@gmail.com</span>{" "}
          </p>
          <p>My Interest:</p>
          <div>
            <p className="text-red-200">-Action, Adventures</p>
            <p className="text-red-200">-RPG</p>
            <p className="text-red-200">-Open World</p>
            <p className="text-red-200">-Fantasy</p>
          </div>
          <p>Contact</p>
          <div>
            <p className="text-red-200">Tel:092-279-1933</p>
            <p className="text-red-200">ID LINE: PoshX1z</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
