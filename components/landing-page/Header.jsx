"use client";

import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[80px] bg-white/20 backdrop-blur-xl fixed top-0 left-0 right-0 z-10 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center px-6 xl:px:0">
        <Logo />

        <Link href="/login">
          <ButtonSecondary btnText={"Login"} />
        </Link>
      </div>
    </header>
  );
}
