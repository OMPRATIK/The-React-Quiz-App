import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },

    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 ? String(mins).padStart(2, "0") : mins}:
      {seconds < 10 ? String(seconds).padStart(2, "0") : seconds}
    </div>
  );
}

export default Timer;
