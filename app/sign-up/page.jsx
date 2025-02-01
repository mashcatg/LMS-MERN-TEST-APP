"use client";

import SignUp from "@/components/landing-page/SignUp";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="home-page-bg bg-body bg-cover bg-no-repeat">
        <SignUp />
      </div>
    </ReactLenis>
  );
}
