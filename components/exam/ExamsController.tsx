"use client";
import React, { useState } from "react";
import Exam from "./Exam";
import { quizData } from "@/lesson1";

function ExamsController() {
  const [questionNumber, setQuestionNumber] = useState(0);

  const questions = quizData;

  const examsAnswers = (answer: string) => {
    console.log(answer);
    console.log(questions.length)
    if (questions.length - 1 > questionNumber) {
      setQuestionNumber((questionNumber) => questionNumber + 1);
    }
  };

  return (
    <Exam examQuestions={questions[questionNumber]} onClick={examsAnswers} />
  );
}

export default ExamsController;
