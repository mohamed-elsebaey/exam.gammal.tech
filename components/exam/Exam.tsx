"use client";
// import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "./CodeBlock";

interface ExamType {
  id: string;
  question: string;
  text: string;
  options: string[];
}

function Exam({
  examQuestions,
  onClick,
  count,
}: {
  examQuestions: ExamType;
  onClick: any;
  count: any;
}) {

  const questionNumberInQuiz: string = examQuestions.id;
  const questionHeader: string = examQuestions.question;
  const Code: string = examQuestions.text;
  const options: string[] = examQuestions.options;


  return (
    <div className="container flex gap-4 flex-wrap justify-center items-start">
      <div className="w-[100%] lg:grow lg:max-w-[65%] ">
        <CodeBlock language="javascript" value={Code} />
      </div>
      <div className="relative w-[100%] overflow-auto sm:w-[85%] md:w-[70%] lg:w-96 bg-[#282c34] p-4 rounded-md select-none text-white h-[532px] max-h-[532px] text-center flex flex-col gap-4">
        {/*  */}
        <div
          className={`absolute top-4 right-4 w-14 h-14 rounded-full ${
            count <= 5 ? "bg-red-200" : "bg-white"
          } text-primary text-2xl font-bold flex justify-center items-center`}
        >
          {count}
        </div>
        {/*  */}
        <h1 className="py-4 text-lg font-bold">{questionNumberInQuiz}</h1>
        <hr />
        <h3 className="text-left my-4">{questionHeader}</h3>
        {options.map((option, index) => {
          return (
            <div
              className="bg-white text-primary py-4 px-2 rounded-lg cursor-pointer"
              key={index + 1}
              onClick={() =>
                onClick({
                  id: questionNumberInQuiz,
                  value: option,
                  time:  count,
                })
              }
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Exam;
