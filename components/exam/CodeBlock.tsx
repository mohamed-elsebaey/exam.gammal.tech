"use client";
import React, { useState, useEffect, useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = ({ language, value }: any) => {
  const [animatedValue, setAnimatedValue] = useState<string>(value[0]);
  let i = 0;
  const intervalRef: any = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset animation state when `value` changes
    i = 0;
    setAnimatedValue(value[0]);

    // Start the animation
    intervalRef.current = setInterval(() => {
      i++;
      if (value.length > i) {
        setAnimatedValue((prevCount) => prevCount + value[i]);
      }
    }, 30);

    // Clear the interval on component unmount or `value` change
    return () => clearInterval(intervalRef.current);
  }, [value]);

  return (
    <div className="relative w-full bg-gray-900 p-4 rounded-md select-none">
      <SyntaxHighlighter
        style={atomOneDark}
        language={language}
        showLineNumbers
        wrapLines
        customStyle={{ height: "500px", maxHeight: "500px" }}
      >
        {animatedValue}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
