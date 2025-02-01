import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className="relative min-w-[184px] inline-flex items-center justify-center px-6 py-[1.2rem] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent_primary via-accent_secondary to-accent_primary"></span>
      <span className="absolute bottom-0 right-0 block w-72 h-72 mb-32 mr-4 transition duration-500 origin-bottom-left trandform rotate-45 translate-x-24 bg-accent_tertiary rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white text-sm uppercase tracking-[1px]">
        {btnText}
      </span>
    </button>
  );
};

export default Button;
