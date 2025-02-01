"use client";

import ProfileEditPage from "@/components/dashboard/ProfileEditPage";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Dashboard() {
  return (
    <ReactLenis root>
      <div>
        <ProfileEditPage />
      </div>
    </ReactLenis>
  );
}
