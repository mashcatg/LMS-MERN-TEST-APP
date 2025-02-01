"use client";

import Invoices from "@/components/dashboard/Invoices";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <Invoices />
      </div>
    </ReactLenis>
  );
}
