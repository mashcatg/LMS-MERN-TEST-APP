"use client";

import Helpline from "@/components/dashboard/Helpline";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <Helpline />
      </div>
    </ReactLenis>
  );
}
