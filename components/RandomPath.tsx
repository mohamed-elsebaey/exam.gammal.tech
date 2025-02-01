import React from "react";

interface NumberData {
  value: number;
  top: number;
  left: number;
}

const generateRandomNumbers = (count: number): NumberData[] => {
  const numbers: NumberData[] = [];
  for (let i = 0; i < count; i++) {
    numbers.push({
      value: i + 1,
      top: Math.random() * 80,
      left: Math.random() * 80,
    });
  }
  return numbers;
};

function RandomPath() {
  const numbers = generateRandomNumbers(10); // يمكنك تغيير العدد هنا

  return (
    <div className="relative h-screen w-screen">
      {numbers.map((number) => (
        <div
          key={number.value}
          className="absolute bg-blue-500 text-white rounded-full p-2"
          style={{ top: `${number.top}%`, left: `${number.left}%` }}
        >
          {number.value}
        </div>
      ))}
    </div>
  );
}

export default RandomPath;
