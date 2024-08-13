import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const eventTime = new Date("2024/10/03 00:00");
      const currentTime = new Date(Date.now());
      const diff = (eventTime.getTime() - currentTime.getTime()) / 1000;
      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff - days * 86400) / 3600);
      const minutes = Math.floor((diff - days * 86400 - hours * 3600) / 60);
      const seconds = Math.floor(
        diff - days * 86400 - hours * 3600 - minutes * 60
      );

      const format = (number, timeString) =>
        number === 0
          ? ""
          : number === 1
          ? ` ${number} ${timeString}`
          : ` ${number} ${timeString + "s"}`;

      setTimeLeft(
        `${format(days, "Day") + format(hours, "Hour")} ${
          hours === 0 && days === 0 ? "Event has started!" : "Left!"
        }`
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h2 className="text-light text-center text-[4rem] md:text-[6rem] font-semibold teko">
      {timeLeft}
    </h2>
  );
}

export default Timer;
