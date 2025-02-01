"use client";

import Services from "@/components/dashboard/Services";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <Services />
      </div>
    </ReactLenis>
  );
}
