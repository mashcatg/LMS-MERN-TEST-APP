"use client";

import BuyService from "@/components/dashboard/BuyService";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <BuyService />
      </div>
    </ReactLenis>
  );
}
