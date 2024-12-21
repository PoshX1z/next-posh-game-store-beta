"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <ul className="navbar flex justify-center items-center gap-20 text-white font-semibold text-2xl">
      <Link href="/games">
        <li className="border-2 border-blue-300 bg-sky-700 rounded-lg p-1.5 hover:bg-sky-600 active:bg-sky-900 transition-all">
          All Games
        </li>
      </Link>
      <Link href="/games/action">
        <li className="border-2 border-blue-300 bg-sky-700 rounded-lg p-1.5 hover:bg-sky-600 active:bg-sky-900 transition-all">
          Actions
        </li>
      </Link>
      <Link href="/games/fps">
        <li className="border-2 border-blue-300 bg-sky-700 rounded-lg p-1.5 hover:bg-sky-600 active:bg-sky-900 transition-all">
          FPS
        </li>
      </Link>
      <Link href="/games/fantasy">
        <li className="border-2 border-blue-300 bg-sky-700 rounded-lg p-1.5 hover:bg-sky-600 active:bg-sky-900 transition-all">
          Fantasy
        </li>
      </Link>
      <Link href="/games/soul_like">
        <li className="border-2 border-blue-300 bg-sky-700 rounded-lg p-1.5 hover:bg-sky-600 active:bg-sky-900 transition-all">
          Soul-Like
        </li>
      </Link>
      <Link href="/games/open_world">
        <li className="border-2 border-blue-300 bg-sky-700 rounded-lg p-1.5 hover:bg-sky-600 active:bg-sky-900 transition-all">
          Open World
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
// #1363aa
