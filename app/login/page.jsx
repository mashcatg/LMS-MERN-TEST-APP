"use client";

import Login from "@/components/landing-page/Login";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="home-page-bg bg-body bg-cover bg-no-repeat">
        <Login />
      </div>
    </ReactLenis>
  );
}
