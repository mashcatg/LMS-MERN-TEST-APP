"use client";

import BrandAmbassador from "@/components/dashboard/BrandAmbassador";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <BrandAmbassador />
      </div>
    </ReactLenis>
  );
}
