import React from "react";
import Markdown from "./Markdown";

const getOptionName = (index) => {
  if (index === 0) return "ক";
  if (index === 1) return "খ";
  if (index === 2) return "গ";
  if (index === 3) return "ঘ";
};

export default function MCQ({ mcq, mcqIndex }) {
  return (
    <div className="pt-8">
      {/* Question */}
      <div className="font-semibold">
        <Markdown>{`${mcqIndex + 1}&period; ${mcq.question}`}</Markdown>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {mcq.options.map((option, i) => (
          <div
            key={option}
            className={`border border-slate-300 ${mcq.right_option === i && "border-2 border-green-600 bg-green-200"} px-3 py-2 rounded-md font-medium`}
          >
            <Markdown>{`${getOptionName(i)}&period; ${option}`}</Markdown>
          </div>
        ))}
      </div>
    </div>
  );
}
