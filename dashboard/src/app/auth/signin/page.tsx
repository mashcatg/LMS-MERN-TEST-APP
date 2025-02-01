import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Signin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title: "Login | Ennovat",
  description: "Change the way to manage your course.",
};

const SignIn: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-wrap items-center max-w-6xl w-full">
        {/* Left Column */}
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-start">
          <div className="w-full p-4 sm:p-12 xl:p-15 max-w-md mx-auto flex flex-col items-center">
            <Image
              src={"/images/logo/logo-light.png"}
              alt="Logo"
              width={176}
              height={32}
              className="block mx-auto xl:mx-0 mb-8"
            />
            <Signin />
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none flex flex-col items-center justify-center h-full">
            <Link href="/" className="mb-10 inline-block">
              <Image
                className="hidden dark:block"
                src={"/images/logo/logo-dark.png"}
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/logo-light.png"}
                alt="Logo"
                width={176}
                height={32}
              />
            </Link>

            <div className="text-center">
              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign in to your account
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Please sign in to your account by completing the necessary
                fields below
              </p>
            </div>

            <div className="mt-10">
              <Image
                src={"/images/grids/grid-02.svg"}
                alt="Graphic"
                width={405}
                height={325}
                className="mx-auto dark:opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
