import React, { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Timer() {
  const {dispatch,secondRemaining} = useQuiz();
    const minutes= Math.floor(secondRemaining/60);
    const seconds = secondRemaining %60;
  useEffect(
    function () {
     const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return ()=>clearInterval(id);
    },
    [dispatch]
  );
  return <div className="timer">{minutes<10?"0":""}{minutes}:{seconds<10?"0":""}{seconds}</div>;
}
