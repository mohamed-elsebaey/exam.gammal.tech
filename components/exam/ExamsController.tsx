"use client";
import React, { useState } from "react";
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

  const questions = quizData;

  const examsAnswers = (answer: string) => {
    if (questions.length - 1 > questionNumber) {
      setAnswers([...answers, answer]);
      setQuestionNumber((questionNumber) => questionNumber + 1);
    } else {
      examCorrection([...answers, answer]);
    }
  };

  return (
    <Exam examQuestions={questions[questionNumber]} onClick={examsAnswers} />
  );
}

export default ExamsController;
