import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PageList, PageListItem } from "./";
import { pages } from "../utils/constants";

function NavBar({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const { contextSafe } = useGSAP();

  const toggleNavBar = contextSafe(() => {
    if (!isOpen) {
      gsap.to(".page-list", {
        display: "block",
        position: "absolute",
        opacity: 1,
        duration: 0.2,
      });
    } else {
      gsap.to(".page-list", {
        display: "none",
        position: "absolute",
        opacity: 0,
        duration: 0.2,
      });
    }
    setIsOpen((prevIsOpen) => !prevIsOpen);
  });

  return (
    <nav className="md:flex md:items-center">
      <div className="bg-dark w-full z-20 text-light py-5 ">
        <div className="grid relative w-4/5 mx-auto lg:w-full">
          <span
            className="md:hidden absolute justify-self-start align-top translate-y-4 cursor-pointer"
            onClick={() => toggleNavBar()}
          >
            <img
              src={`${isOpen ? "/assets/cancel.png" : "/assets/hamburger.png"}`}
              alt="hamburger icon"
              width="42px"
            />
          </span>

          <div className="justify-self-center">
            <h2 className="dm-serif text-[4rem] md:text-[6rem] text-center">
              Paramun'24
            </h2>
          </div>
        </div>
      </div>
      <PageList className={className}>
        {pages.map((page) => (
          <PageListItem page={page} key={page.name} />
        ))}
      </PageList>
    </nav>
  );
}

export default NavBar;
