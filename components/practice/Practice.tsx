import React from "react";

function Practice({ languages }: { languages: any }) {
  // console.log(languages);
  return (
    <div>
      <div>
        <div className="bg-gray-300 rounded-full w-full h-2.5 relative max-w-4xl mx-auto mt-8">
          <div className="w-1/5 h-full rounded-full bg-green-500"></div>
          <p className="text-sm text-green-500 font-bold absolute right-0 -top-6">
            20%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Practice;
