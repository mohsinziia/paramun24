import React from "react";
import { Container, SubHeading } from "./";
import { executiveCouncilMembers } from "../utils/constants";

function ExecutiveCouncil() {
  return (
    <section className="bg-dark py-16">
      <Container>
        <div className="flex flex-col items-center">
          <SubHeading className="text-light mb-16 md:mb-28">
            Executive Council
          </SubHeading>
          <div className="mb-10 flex space-x-10 md:space-x-32">
            {executiveCouncilMembers.map((member) => (
              <div key={member.name} className="w-full">
                <img
                  src="https://via.placeholder.com/120x150"
                  alt="placeholder image"
                  className="w-full mb-4 md:w-[26rem]"
                />
                <p className="text-[1.5rem] md:text-[3rem] montserrat mb-10 text-light">
                  {member.name}
                </p>

                <div className="flex items-center space-x-2">
                  <img
                    className="-translate-y-1"
                    src="/assets/phone.png"
                    alt="phone logo"
                    width="30"
                  />
                  <p className="text-xl md:text-3xl montserrat mb-4 text-light">
                    {member.number}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/assets/email.png" alt="email logo" width="30" />
                  <p className="text-xl md:text-3xl montserrat text-light">
                    {member.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <img src="/assets/instagram.png" alt="instagram logo" width="30" />
            <p className="text-xl md:text-3xl montserrat text-light">
              paramun.24
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExecutiveCouncil;
