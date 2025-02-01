"use client";

import ChatHelpline from "@/components/dashboard/ChatHelpline";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <ChatHelpline />
      </div>
    </ReactLenis>
  );
}
