import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-green-100 flex justify-between sm:py-4 sm:px-4 px-2 py-2 mt-5">
      <Link href="/" className="">
        <p className="logo_text !text-3xl !text-yellow-100">BrewBox</p>
      </Link>

      <div
        className="text-lg text-yellow-100 font-comforta flex items-center justify-center"
        flex
        items-center
        justify-center
      >
        &copy; WebCraft LLC 2023
      </div>
    </div>
  );
}

export default Footer