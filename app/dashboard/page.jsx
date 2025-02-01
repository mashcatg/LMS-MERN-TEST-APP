"use client";

import Home from "@/components/dashboard/Home";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <Home />
      </div>
    </ReactLenis>
  );
}
