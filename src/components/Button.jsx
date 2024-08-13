import React from "react";

function Button({ children, className = "" }) {
  return (
    <button
      className={`bg-dark text-light montserrat text-[2rem] ${className} font-bold px-5 py-3 rounded-md hover:text-white`}
    >
      {children}
    </button>
  );
}

export default Button;
