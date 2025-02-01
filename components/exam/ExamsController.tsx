"use client";
import React, { useEffect, useState } from "react";
import Exam from "./Exam";
import { examCorrection } from "@/app/exam/_action/examCorrection";

import LoadingPage from "@/app/loading";

interface quizData {
  id: string;
  question: string;
  text: string;
  options: string[];
}

function ExamsController({ quizData }: { quizData: quizData[] }) {
  const [show, setShow] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const duration = 15;
  const [count, setCount] = useState(duration);

  const questions = quizData;

  function examsAnswers(answer: string, calledFromUseEffect?: boolean) {
    if (questions.length - 1 > questionNumber) {
      setAnswers([...answers, answer]);
      setQuestionNumber((questionNumber) => questionNumber + 1);
      !calledFromUseEffect && setCount(15);
    } else {
      setCount(0)
      examCorrection([...answers, answer]);
    }
  }

  // ********************************* *** Timer Start *** *********************************
  // useEffect(() => {
  //   setCount(duration);
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount === 1) {
  //         clearInterval(intervalId);
  //         examsAnswers("");
  //         clearInterval(intervalId);
  //       }
  //       return prevCount ? prevCount - 1 : 0;
  //     });
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [questionNumber]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      count - 1
        ? setCount(() => (count ? count - 1 : 0))
        : questions.length - 1 > questionNumber ? setCount(15) : setCount(0);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      if (count === 1) {
        examsAnswers("", true);
      }
    };
  }, [examsAnswers]);
  // ********************************* *** Timer  End  *** *********************************

  return (
    <>
      {show ? (
        <Exam
          examQuestions={questions[questionNumber]}
          onClick={examsAnswers}
          count={count}
        />
      ) : (
        <div className="-mt-20">
          <LoadingPage />
        </div>
      )}
    </>
  );
}

export default ExamsController;
