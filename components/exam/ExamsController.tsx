"use client";
import React, { useEffect, useState } from "react";
import Exam from "./Exam";
import { examCorrection } from "@/app/exam/_action/examCorrection";

interface quizData {
  id: string;
  question: string;
  text: string;
  options: string[];
}

function ExamsController({ quizData }: { quizData: quizData[] }) {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const duration = 15;
  const [count, setCount] = useState(duration);

  const questions = quizData;

  function examsAnswers(answer: string) {
    if (questions.length - 1 > questionNumber) {
      setAnswers([...answers, answer]);
      setQuestionNumber((questionNumber) => questionNumber + 1);
    } else {
      // setQuestionNumber(0);
      examCorrection([...answers, answer]);
    }
  }

  // ********************************* *** Timer Start *** *********************************
  useEffect(() => {
    setCount(duration);
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 1) {
          clearInterval(intervalId);
          // setQuestionNumber(() => questionNumber + 1);
          examsAnswers("");
        }
        return prevCount ? prevCount - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [questionNumber]);
  // ********************************* *** Timer  End  *** *********************************

  return (
    <Exam
      examQuestions={questions[questionNumber]}
      onClick={examsAnswers}
      count={count}
    />
  );
}

export default ExamsController;
