"use client";
import React, { useState, useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, value }: any) => {
  const [animatedValue, setAnimatedValue] = useState<string>(value[0]);
  let i = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {
      i++;
      if (value.length > i) {
        setAnimatedValue((prevCount) => prevCount + value[i]);
      }
    }, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full bg-gray-900 p-4 rounded-md select-none">
      <SyntaxHighlighter
        style={atomOneDark}
        language={language}
        showLineNumbers
        wrapLines
        customStyle={{height:'500px' ,maxHeight:'500px'}}
      >
        {animatedValue}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
