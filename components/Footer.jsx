"use client";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer flex gap-20 text-white">
      <div>
        <p className="text-3xl font-extrabold">POSH STORE</p>
      </div>
      <div className="flex gap-20 text-xl cursor-pointer">
        <div className="flex flex-col gap-5">
          <p className="hover:text-blue-200">About us</p>
          <p className="hover:text-blue-200">History</p>
          <p className="hover:text-blue-200">Contact Us</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="hover:text-blue-200">Payment</p>
          <p className="hover:text-blue-200">Blog</p>
          <p className="hover:text-blue-200">FAQ</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="hover:text-blue-200">Policy</p>
          <p className="hover:text-blue-200">Careers</p>
          <p className="hover:text-blue-200">Currency</p>
        </div>
        <div className="flex flex-col gap-5">
          <p>Contact 092-279-1933</p>
          <p>ID Line: PoshX1z </p>
          <p>Email: xdante1357@gmail.com</p>
        </div>
      </div>
      <div>
        <p className="text-xl">Community</p>
        <div className="flex gap-5 pt-2">
          <FacebookIcon fontSize="large" className="text-blue-700" />
          <XIcon fontSize="large" className="text-black" />
          <YouTubeIcon fontSize="large" className="text-red-600" />
          <LinkedInIcon fontSize="large" className="text-blue-700" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
