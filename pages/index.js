import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useState } from "react";

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
    const stringWithDoubleBackSlashToSingle = e.target.value.replace(/\\\\/g, '\\')
    setText(`${stringWithDoubleBackSlashToSingle}`);
  };
  return (
    <div style={{fontSize: '1.5rem'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 'bold', color: 'tomato'}}>*** Instruction: Always use DOUBLE BACKSLASH (\\) instead of SINGLE BACKSLASH (\) ***</h1>
      <MathJaxContext version={3} config={config}>
        <div>
          <h3 style={{ fontWeight: "bold", textDecoration: 'underline', marginBottom: '1rem' }}>Input here</h3>
          <textarea
            onChange={textHandler}
            name=""
            id=""
            rows="10"
            style={{
              border: "2px solid tomato",
              outline: "none",
              width: "100%",
              maxWidth: "80rem",
            }}
          />
        </div>
        <div>
          <h3 style={{ fontWeight: "bold", textDecoration: 'underline', marginBottom: '1rem' }}>Output here</h3>
          <MathJax hideUntilTypeset={"first"}>{text}</MathJax>
        </div>
      </MathJaxContext>
    </div>
  );
}
