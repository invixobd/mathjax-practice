import { useState } from "react";
import Markdown from "../components/Markdown";

export default function Home() {
  const [text, setText] = useState(`Nothing to show as output...`);

  const textHandler = (e) => {
    const stringWithDoubleBackSlashToSingle = e.target.innerText.replace(
      /\\\\/g,
      "\\"
    );
    setText(`${stringWithDoubleBackSlashToSingle}`);
  };
  return (
    <div className="container">
      <h1 className="text-center font-semibold text-2xl text-red-600 pt-4">
        *** Instruction: Always use DOUBLE BACKSLASH (\\\\) instead of SINGLE
        BACKSLASH (\) ***
      </h1>
      <div className="pt-6">
        <h2 className="text-xl font-semibold">🎯 Input here</h2>
        <div
          contentEditable="true"
          className="w-full border-2 border-slate-500 rounded-md mt-4 p-2 h-80"
          onInput={textHandler}
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-600 pt-10">
          🎯 Output here
        </h2>
        <div className="mt-4">
          <Markdown>{text}</Markdown>
        </div>
      </div>
    </div>
  );
}
