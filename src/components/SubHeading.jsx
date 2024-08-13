import React from "react";

function SubHeading({ className, children }) {
  return (
    <h2
      className={`${className} dm-serif text-center text-[5rem] md:text-[7rem] leading-none`}
    >
      {children}
    </h2>
  );
}

export default SubHeading;
