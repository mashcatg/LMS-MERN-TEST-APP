import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-accent_secondary">
      <div className="flex flex-col items-center">
        {/* Pulsing Logo or Icon */}
        <div className="animate-bounce w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-lg">
          <img
            src="ennovat-icon.png" // Update with the path to your logo file
            alt="Loading"
            className="w-8 h-8 animate-spin"
          />
        </div>

        {/* Spinner Bar */}
        <div className="mt-6 w-48 h-2 bg-white rounded-full overflow-hidden">
          <div className="h-full w-24 bg-accent_primary rounded-full animate-move"></div>
        </div>
      </div>
    </div>
  );
}
