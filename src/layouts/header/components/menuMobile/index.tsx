"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { Nav } from "../nav";
import { SocialButtons } from "../socialButtons";
import { Logo } from "../logo";

export const MenuMobile = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-none w-fit block md:hidden"
        aria-label="Botão do menu mobile"
        onClick={() => setShowModal(true)}
      >
        <FiMenu size={30} color="#e6e6e6" />
      </button>

      {showModal && (
        <div className="w-full h-screen fixed top-0 left-0 px-6 bg-dark-800 text-white flex flex-col">
          <div className="mt-6">
            <Logo />
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="absolute right-6 top-6"
          >
            <IoCloseOutline size={30} color="#e6e6e6" />
          </button>

          <div className="mt-12 mb-6 h-full flex flex-col justify-between">
            <Nav />
            <SocialButtons />
          </div>
        </div>
      )}
    </>
  );
};
