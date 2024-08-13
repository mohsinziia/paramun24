import React from "react";
import { Button, SubHeading, Container } from "./";

function Committies() {
  return (
    <section className="bg-gold py-20">
      <Container>
        <div className="flex flex-col items-center">
          <SubHeading className="text-dark mb-16">Committies</SubHeading>
          <div className="mb-10 md:hidden flex space-x-10">
            <img
              className=""
              src="https://via.placeholder.com/120x150"
              alt="paramun logo"
            />
            <img src="https://via.placeholder.com/120x150" alt="paramun logo" />
          </div>
          <p className="text-2xl md:text-4xl montserrat mb-10 md:mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias.
          </p>
          <Button className="md:text-[3rem] md:mb-20">
            Explore Committies
          </Button>
        </div>
        <div className="hidden md:flex justify-center space-x-32">
          <img
            className="md:w-[26rem]"
            src="https://via.placeholder.com/120x150"
            alt="paramun logo"
          />
          <img
            className="md:w-[26rem]"
            src="https://via.placeholder.com/120x150"
            alt="paramun logo"
          />
        </div>
      </Container>
    </section>
  );
}

export default Committies;
