import { NavBar, Button } from "./";

function Hero() {
  return (
    <header>
      <NavBar className="" />
      <section className="bg-gold pt-24 pb-52 min-h-[calc(100vh-11rem)]">
        <div>
          <img
            src="/assets/lgs_paramun_logo.png"
            className="w-full max-w-[80rem] mx-auto"
            alt="paramun logo"
          />
        </div>
        <div className="flex flex-col items-center justify-around">
          <h1 className="teko text-center text-[3rem] md:text-[7rem] lg:text-[6rem] font-bold mb-4 md:mb-0">
            Dawn's Embrace Edition
          </h1>
          <p className="montserrat text-center text-[2rem] md:text-[3rem] tracking-[30%] md:mb-4">
            October
          </p>
          <p className="montserrat text-center text-[2rem] md:text-[3rem] tracking-[30%] mb-14">
            04 . 05 . 06
          </p>
          <Button className="md:text-[3rem]">Register Now</Button>
        </div>
      </section>
    </header>
  );
}
export default Hero;
