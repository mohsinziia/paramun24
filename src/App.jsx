import React from "react";
import {
  NavBar,
  Hero,
  TimerSection,
  Committies,
  ExecutiveCouncil,
} from "./components";

function App() {
  return (
    <div>
      <Hero />
      <TimerSection />
      <Committies />
      <ExecutiveCouncil />
    </div>
  );
}

export default App;
