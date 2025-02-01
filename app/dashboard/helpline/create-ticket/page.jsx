"use client";

import CreateTicket from "@/components/dashboard/CreateTicket";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <CreateTicket />
      </div>
    </ReactLenis>
  );
}
