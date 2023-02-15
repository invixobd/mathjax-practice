import React from "react";
import MCQ from "./MCQ";

export default function Exam({ mcqExam }) {
  return (
    <div className="container pt-10">
      <div className="flex flex-col gap-8 divide-y-2 divide-blue-200">
        {mcqExam.mcq_state.map((mcq, i) => (
          <MCQ key={mcq.question_id} mcq={mcq} mcqIndex={i} />
        ))}
      </div>
    </div>
  );
}
