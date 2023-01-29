import { MathJax, MathJaxContext } from "better-react-mathjax";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

export default function Home() {
  // const [textMain, setTextMain] =
  //   useState(`Inside a MathJax block element, one might use both Latex inline math, such
  // as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
  // to Latex display math, like
  // \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
  // ... and then continue with inline math.`);

  const [text, setText] = useState(`Nothing to show as output...`);

  const textHandler = (e) => {
    const stringWithDoubleBackSlashToSingle = e.target.value.replace(
      /\\\\/g,
      "\\"
    );
    setText(`${stringWithDoubleBackSlashToSingle}`);
    localStorage.setItem(
      "math_jax_practice",
      stringWithDoubleBackSlashToSingle
    );
  };

  useEffect(() => {
    const getMathJaxPracticeFromLocalStorage =
      localStorage.getItem("math_jax_practice");

    if (getMathJaxPracticeFromLocalStorage) {
      setText(getMathJaxPracticeFromLocalStorage);
    }
  }, []);
  return (
    <div className="container">
      <h1 className="text-center font-semibold text-2xl text-red-600 pt-4">
        *** Instruction: Always use DOUBLE BACKSLASH (\\) instead of SINGLE
        BACKSLASH (\) ***
      </h1>
      <MathJaxContext version={3} config={config}>
        <div className="pt-6">
          <h2 className="text-xl font-semibold">Input here</h2>
          <textarea
            className="w-full border-2 border-slate-500 rounded-md mt-4 p-2"
            onChange={textHandler}
            rows="15"
            value={text}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-green-600 pt-10">
            Output here
          </h2>
          <div className="mt-4">
            <MathJax hideUntilTypeset={"first"}>{parse(text)}</MathJax>
          </div>
        </div>
      </MathJaxContext>
    </div>
  );
}
