export const mcqExam = {
  subject: "physics",
  sub_title: "পদার্থবিজ্ঞান ১ম পত্র",
  chapter: "অধ্যায় ০৮",
  chap_title: "পর্যাবৃত্ত গতি",
  total_marks: 20,
  duration: 15,
  mcq_state: [
    {
      question_id: 1,
      question: ` $\\sqrt{-16} \\times\\sqrt{-1}$=কোনটি?`,
      options: [" 4 ", " -4 ", " $ \\pm4 $ ", " $ 4i $ "],
      explanation:
        "$\\sqrt{-16} \\times\\sqrt{-1}$ = 4i $\\times$ i= 4$i^2$= -4",
      right_option: 1,
    },
    {
      question_id: 2,
      question: "-1+$\\sqrt3i$ এর আর্গুমেন্ট কত ?",
      options: [
        "$\\frac{\\pi}{3}$",
        "$\\frac{3\\pi}{4}$",
        "$\\frac{2\\pi}{3}$",
        "$\\frac{\\pi}{6}$",
      ],
      explanation:
        "$\\theta=\\pi-\\tan ^{-1}\\left|\\frac{\\sqrt{3}}{-1}\\right|=\\pi-\\tan ^{-1}(\\sqrt{3})=\\pi-\\frac{\\pi}{3}=\\frac{2\\pi}{3}$",
      right_option: 2,
    },
    {
      question_id: 3,
      question: `$-2\\sqrt3+6i$ এর আর্গুমেন্ট কোনটি? `,
      options: [
        "$-\\frac{\\pi}{3}$",
        "$\\frac{\\pi}{3}$",
        "$\\frac{2\\pi}{3}$",
        "$-\\frac{2\\pi}{3}$",
      ],
      explanation:
        "$-2+\\sqrt3+6i\\hspace{1mm} এর \\hspace{1mm}আর্গুমেন্ট,\\theta=\\pi-\\tan^{-1}|\\frac{6}{-\\sqrt3}|\\newline=\\pi-\\tan^{-1}\\sqrt3\\newline \\pi-\\frac{\\pi}{3}=\\frac{2\\pi}{3} $",
      right_option: 2,
    },
    {
      question_id: 4,
      question: `$\\frac{5-i}{2-3i}$ এর মডুলাস ও আর্গুমেন্ট কত?`,
      options: [
        "$\\ 2 \\cdot \\frac{\\pi}{2}$ ",
        "$\\sqrt{2} \\cdot \\frac{\\pi}{2}$ ",
        "$\\ 2 \\cdot \\frac{\\pi}{4}$ ",
        "$\\sqrt{2} \\cdot \\frac{\\pi}{4}$ ",
      ],
      explanation:
        "$\\begin{aligned}\\dfrac{5-i}{2-3i}=\\dfrac{\\left( 5-i\\right) \\times \\left( 2+3i\\right) }{\\left( 2-3i\\right) \\times \\left( 2+3i\\right) }=\\dfrac{10+13i+3}{13}\\\\ =\\dfrac{\\left( 5-i\\right) \\times \\left( 2+3i\\right) }{2^{2}-\\left( 3i\\right) ^{2}}=\\dfrac{13+13i}{13}\\\\ =\\dfrac{10-2i+5i-3i^{2}}{13}=1+i\\end{aligned}\\newline  মডুলাস= \\sqrt{1^{2}+2^{2}}= \\sqrt{2}\\newline  আর্গুমেন্ট=tan -\\dfrac{1}{1}=\\tan ^{-1}\\left( 1\\right) =\\dfrac{\\pi }{4}$",
      right_option: 3,
    },
    {
      question_id: 5,
      question: ` $i^2$ = $-1$ হলে $\\frac{i+i^{-1}}{i-i^{-1}}এর\\hspace{1mm}মান \\hspace{1mm}কত?$`,
      options: ["0 ", "-2i ", " 2i", "2 "],
      explanation:
        "$\\frac{i+i^{-1}}{i-i^{-1}}=\\frac{i+\\frac{1}{i}}{i-\\frac{1}{i}}=\\frac{i^2+1}{i^2-1}=\\frac{-1+1}{-1-1}=0$",
      right_option: 0,
    },
    {
      question_id: 6,
      question:
        "$z=1-\\frac{i}{1-\\frac{i}{1+i}}$ জটিল সংখ্যাটির মডুলাস ও আর্গুমেন্ট-  ",
      options: [
        "$\\ 1,0$",
        "$\\ 1,  \\frac{\\pi}{2} $",
        "$\\ 1, {\\pi}$",
        "$\\ 1, \\frac{3\\pi}{2} $",
      ],
      explanation: `1-$\\frac{i}{1-\\frac{i}{1+i}}$ = 1- $\\frac{i}{\\frac{1+i-1}{1+i}}$ = 1-(1+i)=-i <br> 
        মডুলাস= $\\sqrt{{(-1)}^2 + {0}^2}$ = 1, <br>
        আর্গুমেন্ট= $\\tan^{-1} (\\frac{-1}{0})$ = $2{\\pi}-tan^{-1} (\\infty)$= $2{\\pi}-\\frac{\\pi}{2}$=$\\frac{3\\pi}{2}$`,
      right_option: 3,
      selected_option: null,
    },
    {
      question_id: 7,
      question: "$\\frac{5-i}{2-3i}$ এর আর্গুমেন্ট কত?",
      options: [
        "$\\frac{\\pi}{4} $",
        "$\\frac{\\pi}{2} $",
        "$\\frac{2pi}{3}$",
        "${\\pi}$",
      ],
      explanation: `$\\frac{5-i}{2-3i}$ = $\\frac{(5-i)(2+3i)}{4+9}$ = $\\frac{10+13i+3}{13}$ = $\\frac{13+13i}{13}=1-i$ <br> আর্গুমেন্ট =$tan^{-1}(\\frac{1}{1})$ = $tan^{-1}(1)$ = $\\frac{\\pi}{4}$ `,
      right_option: 0,
      selected_option: null,
    },
    {
      question_id: 8,
      question: "$\\frac{1+i}{1-i} $  এর পরম মান হলো -",
      options: ["0", "1", "$\\sqrt{2}$", "i"],
      explanation: ` $\\frac{1+i}{1-i}$ = $\\frac{(1+i)(1+i)}{(1-i)(1+i)}$ = $\\frac{(1+i)^{2}}{1-i^{2}}$ = $\\frac{1+2i+i^{2}}{1+1}$ = $\\frac{2i}{2}$ = $i$
  
  
  অর্থাৎ , $\\frac{1+i}{1-i}$ = $i$ = $0+i$    
  $\\therefore$ পরম মান বা মডুলাস = $\\sqrt{0^2+1^2}$ = 1 `,
      right_option: 1,
      selected_option: null,
    },
    {
      question_id: 9,
      question: "$\\frac{i-i^{-1}}{i+2i^{-1}}$  এর মান এবং নতি হবে যথাক্রমে -",
      options: [
        "0,0",
        "-2i,$\\frac{-\\pi}{2}$",
        "2i,$\\frac{\\pi}{2}$",
        "-2,${\\pi}$",
      ],
      explanation: `মান = $\\frac{i-i^{-2}}{i+2i^{-2}}$ = $\\frac{i^2-1}{i^2+2}$ = $-2$ <br>
        -2 = -2+i0,<br>
        $\\theta$ = $\\tan^{-1}\\frac {0}{-2} $ =  $\\tan^{-1} 0$ = $ {\\pi} $`,
      right_option: 3,
      selected_option: null,
    },
    {
      question_id: 10,
      question: "$\\frac{1}{1+i}$ জটিল সংখ্যাটির অবস্থান কোথায়?",
      options: [
        "১ম চতুর্ভাগে",
        "২য় চতুর্ভাগে ",
        "৩য় চতুর্ভাগে",
        "৪র্থ চতুর্ভাগে",
      ],
      explanation: `$\\frac{ 1}{ 1+i }$ = $\\frac{ 1}{ 2}$ - i$\\frac{ 1}{ 2}$ ; যা  ৪র্থ চতুর্ভাগে অবস্থিত ।`,
      right_option: 3,
      selected_option: null,
    },
    {
      question_id: 11,
      question: "-2-5i সংখ্যটি কোন চতুর্ভাগে আবস্থিত ?",
      options: ["প্রথম", "দ্বিতীয়", "তৃতীয়", "চতুর্থ"],
      explanation: ``,
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 12,
      question: "দুইটি অনবন্ধি জটিল সংখ্যার সমষ্টি ও গুনফল ক্যামন হবে?",
      options: [
        "বাস্তব সংখ্যা",
        "জটিল সংখ্যা",
        "অবাস্তব সংখ্যা",
        "ঋনাত্তক সংখ্যা",
      ],

      explanation: `Solve:<br>দুইটি অনবন্ধি জটিল সংখ্যার সমষ্টি ও গুনফল বাস্তব । কারন ,<br>
        Z=x + iy, $\\overline{Z}$=x - iy,Z + $\\overline{Z}$ = x + iy + x - iy = 2x, বাস্তব ।<br>
        Z$\\overline{Z}$= (x + iy) (x - iy) = $x^2 + y^2$, বাস্তব ।`,

      right_option: 0,
      selected_option: null,
    },
    {
      question_id: 13,
      question: "$z = \\frac{-4-3i}{i}$ এর কাল্পনিক অংশ  কত ?",
      options: ["3", "4", "-4", "-3"],
      explanation: `$z = \\frac{-4-3i}{i}$ = -$\\frac{4}{i}+\\frac{3i}{i}$<br>= $\\frac{4i}{i^2}+3$<br>= 4i + 3<br>= 3 + 4i <br> কাল্পনিক অংশ =4`,

      right_option: 1,
      selected_option: null,
    },
    {
      question_id: 14,
      question: "$\\frac{1}{a+i}=\\frac{i}{a-i} $ হলে a এর মান কত?",
      options: ["1", "$\\frac{i}{2}$", "-1", "-$\\frac{i}{2}$"],
      explanation: `$\\frac{1}{a+i}=\\frac{i}{a-i}$<br> a - i = ia - $i^2$ <br>ia -1 = a - 1 <br>বাস্তব এবং কাল্পনিক অংক সমিক্রিত করে পাই,-1 = a এবং  a = -1 <br>অর্থাৎ a = -1`,

      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 15,
      question:
        "$\\frac{2+3i}{2-i}$=P + Qi হলে ,এবং P,Q বাস্তব সংখ্যা হলে , Q = ?",
      options: [
        "$\\frac{4}{5}$",
        "$\\frac{8}{3}$",
        "$\\frac{8}{5}$",
        "$\\frac{7}{5}$",
      ],
      explanation: `$\\frac{2+3i}{2-i}=\\frac{(2+3i)(2+i)}{(2-i)(2+i)}$<br><br>$=\\frac{4+2i+6i+3i^2}{2^2-i^2}$<br><br>$=\\frac{4+8i-3}{4+1}$<br><br>
      =$\\frac{1+8i}{5}$<br><br> $=\\frac{1}{5}+\\frac{8}{5}i$<br><br>so,$\\frac{2+3i}{2-i}$=P + Qi = $\\frac{1}{5}$ + $\\frac{8}{5}$<br><br>
      Q=$\\frac{8}{5}$<br>`,
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 16,
      question: "$\\dfrac{1}{1+2i}$ এর জটিল অনুবন্ধী নিচের কোনটি ?",
      options: [
        "$\\dfrac{1}{2i-1}$",
        "$1-2i$",
        "$\\dfrac{1+2i}{5}$",
        "$\\dfrac{1-2i}{5}$",
      ],
      explanation: `$\\dfrac{1}{1+2i}  $   এর জটিল অনুবন্ধী$ =\\dfrac{1}{1-2i}=\\dfrac{\\left( 1+2i\\right) }{\\left( 1-2i\\right) \\left( 1+2i\\right) }=\\dfrac{1+2i}{1+4}=\\dfrac{1+2i}{5}$`,
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 17,
      question:
        "$z_{1}=3+2i$ এবং  $z_{2}=3-2i$ হলে  $ z_{1}^{2}+z_{1}z_{2}+z_{2}^{2}$ এর মান কত?",
      options: ["$21$", "$22$", "$23$", "$24$"],
      explanation: `$z_{1}^{2}+z_{1}z_{2}+z_{2}^{2} =\\left( z_{1}+z_{2}\\right) ^{2}-z_{1}z_{2}\\\\\\hspace{2.2cm} =\\left( 3+2i+3-2i\\right)^2 -\\left( 3+2i\\right) \\left( 3-2i\\right) \\\\ \\hspace{2.2cm}=36-\\left\\{ 3^{2}-\\left( 2i\\right) ^{2}\\right\\} \\\\ \\hspace{2.2cm}=36-\\left( 9-4i^{2}\\right) =36-13 =23$`,
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 18,
      question:
        "$z_{1}=1+i$ এবং  $z_{2}=2i+3$ হলে  $\\left| z_{1}z_{2}\\right|$ এর মান কত?",
      options: ["$26$", "$\\sqrt{26}$", "$5\\sqrt{2}$", "$50$"],
      explanation: ` Here  $z_{1}=1+i$        ,       $z_{2}=2i+3$ <br><br>
        $ \\left| z_{1}z_{2}\\right| =\\left| 1+i\\right| \\left| 2i+3\\right| \\\\$<br>$\\hspace{1cm} = \\sqrt{1^{2}+1^{2}}\\times \\sqrt{2^{2}+3^{2}}=\\sqrt{2}\\times \\sqrt{13}= \\sqrt{26}$`,
      right_option: 1,
      selected_option: null,
    },
    {
      question_id: 19,
      question: "$1+i$ জটিল সংখ্যাটির পোলার আকার নিচের কোনটি?",
      options: [
        "$ \\sqrt{2}\\left( \\cos \\dfrac{\\pi }{4}-i\\sin \\dfrac{\\pi }{4}\\right)$",
        "$ \\sqrt{2}\\left( \\cos \\dfrac{\\pi }{4}+i\\sin \\dfrac{\\pi }{4}\\right)$",
        "$\\sqrt{2}\\left( \\sin \\dfrac{\\pi }{4}-i\\cos \\dfrac{\\pi }{4}\\right) $",
        "$\\sqrt{2}\\left( \\sin \\dfrac{\\pi }{4}+i\\cos \\dfrac{\\pi }{4}\\right) $",
      ],
      explanation: ` $r=\\sqrt{1^{2}+1^{2}}=\\sqrt{2}      $        এবং      $  \\hspace{1mm}  \\theta =\\tan ^{-1}\\left( \\dfrac{1}{1}\\right) =\\dfrac{\\pi }{4}$<br>  $\\therefore  $  পোলার আকার $=r\\left( \\cos \\theta +i\\sin \\theta \\right)  =\\sqrt{2}\\left( \\cos\\dfrac{\\pi }{4}+i\\sin \\dfrac{\\pi }{4}\\right)$`,
      right_option: 1,
      selected_option: null,
    },
    {
      question_id: 20,
      question: "$i=-1$   হলে      $  \\hspace{1mm}   i^{3597}=$ কত?",
      options: ["$-i$", "$1$", "$-1$", "$i$"],
      explanation: `$i$ এর পাওয়ারে থাকা সংখ্যার Last Digit কে 4 দিয়ে ভাগ করলে যেই ভাগশেষ পাওয়া যায় সেটি হবে $i$ simplified পাওয়ার। 3597 এর last 2 ডিজিট অর্থাৎ 97 কে 4 দিয়ে ভাগ করলে ভাগশেষ পাওয়া যায় 1, অর্থাৎ$  i^{3597} = i^{1} = i $`,
      right_option: 3,
      selected_option: null,
    },
    {
      question_id: 21,
      question: "$\\dfrac{1}{1+2i}$ এর জটিল অনুবন্ধী নিচের কোনটি ?",
      options: [
        " $\\dfrac{1}{2i-1}$",
        "$1-2i$",
        "$\\dfrac{1+2i}{5}$",
        "$\\dfrac{1-2i}{5}$",
      ],
      explanation: `$\\dfrac{1}{1+2i}  $   এর জটিল অনুবন্ধী$ =\\dfrac{1}{1-2i}=\\dfrac{\\left( 1+2i\\right) }{\\left( 1-2i\\right) \\left( 1+2i\\right) }=\\dfrac{1+2i}{1+4}=\\dfrac{1+2i}{5}$`,
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 22,
      question:
        "$z_{1}=3+2i$ এবং  $z_{2}=3-2i$ হলে  $ z_{1}^{2}+z_{1}z_{2}+z_{2}^{2}$ এর মান কত?",
      options: ["$21$", "$22$", "$23$", "$24$"],
      explanation: `$z_{1}^{2}+z_{1}z_{2}+z_{2}^{2} =\\left( z_{1}+z_{2}\\right) ^{2}-z_{1}z_{2}\\\\\\hspace{2.2cm} =\\left( 3+2i+3-2i\\right)^2 -\\left( 3+2i\\right) \\left( 3-2i\\right) \\\\ \\hspace{2.2cm}=36-\\left\\{ 3^{2}-\\left( 2i\\right) ^{2}\\right\\} \\\\ \\hspace{2.2cm}=36-\\left( 9-4i^{2}\\right) =36-13 =23$`,
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 23,
      question:
        "$z_{1}=1+i$ এবং  $z_{2}=2i+3$ হলে  $\\left| z_{1}z_{2}\\right|$ এর মান কত?",
      options: ["$26$", "$\\sqrt{26}$", "$5\\sqrt{2}$", "$50$"],
      explanation: ` Here  $z_{1}=1+i$        ,       $z_{2}=2i+3$ <br><br>
        $ \\left| z_{1}z_{2}\\right| =\\left| 1+i\\right| \\left| 2i+3\\right| \\\\$<br>$\\hspace{1cm} = \\sqrt{1^{2}+1^{2}}\\times \\sqrt{2^{2}+3^{2}}=\\sqrt{2}\\times \\sqrt{13}= \\sqrt{26}$`,
      right_option: 1,
      selected_option: null,
    },
    {
      question_id: 24,
      question: "$1+i$   জটিল সংখ্যাটির পোলার আকার নিচের কোনটি?",
      options: [
        "$ \\sqrt{2}\\left( \\cos \\dfrac{\\pi }{4}-i\\sin \\dfrac{\\pi }{4}\\right)$",
        "$ \\sqrt{2}\\left( \\cos \\dfrac{\\pi }{4}+i\\sin \\dfrac{\\pi }{4}\\right)$",
        "$\\sqrt{2}\\left( \\sin \\dfrac{\\pi }{4}-i\\cos \\dfrac{\\pi }{4}\\right) $",
        "$\\sqrt{2}\\left( \\sin \\dfrac{\\pi }{4}+i\\cos \\dfrac{\\pi }{4}\\right) $",
      ],
      explanation: ` $r=\\sqrt{1^{2}+1^{2}}=\\sqrt{2}      $        এবং      $  \\hspace{1mm}  \\theta =\\tan ^{-1}\\left( \\dfrac{1}{1}\\right) =\\dfrac{\\pi }{4}$<br>  $\\therefore  $  পোলার আকার $=r\\left( \\cos \\theta +i\\sin \\theta \\right)  =\\sqrt{2}\\left( \\cos\\dfrac{\\pi }{4}+i\\sin \\dfrac{\\pi }{4}\\right)$`,
      right_option: 1,
      selected_option: null,
    },
    {
      question_id: 25,
      question: "$i=-1$ হলে $ \\hspace{1mm} i^{3597}=$ কত?",
      options: ["$-i$", "$1$", "$-1$", "$i$"],
      explanation: `$i$     এর পাওয়ারে থাকা সংখ্যার Last Digit কে 4 দিয়ে ভাগ করলে যেই ভাগশেষ পাওয়া যায় সেটি হবে $i$  simplified পাওয়ার। 3597 এর last  2 ডিজিট অর্থাৎ 97 কে 4 দিয়ে ভাগ করলে ভাগশেষ পাওয়া যায়  1, অর্থাৎ$  i^{3597} = i^{1} = i $`,
      right_option: 3,
      selected_option: null,
    },
    {
      question_id: 26,
      question: "i কাল্পনিক সংখ্যা হলে , $ \\frac{1}{i^{51}} $ এর মান -",
      options: ["1", "-1", "i", "-i"],
      explanation:
        "$ \\frac{1}{i^{51}}  = \\frac{1}{i^{3}}  \\newline \\hspace{1mm}  =\\frac{1}{-i} \\newline \\hspace{1mm}  =\\frac{1}{-i^{2}}=i$",
      right_option: 2,
      selected_option: null,
    },
    {
      question_id: 27,
      question: " $i+i^{2}+i^{3}+i^{4}$ এর মান কোনটি?",
      options: ["0", "1", "-1", "i"],
      explanation: "যেকোনো 4 টি ক্রমিক ঘাতওয়ালা i এর যোগফল শূণ্য হয়",
      right_option: 0,
      selected_option: null,
    },
    {
      question_id: 28,
      question: " $\\frac{i^{176}}{2i+\\frac{1}{i^{33}}}=?$",
      options: ["0", "-1", "i", "-i"],
      explanation: "",
      right_option: 3,
      selected_option: null,
    },
    {
      question_id: 29,
      question: " $2i^{2}=-2$ হলে , $i+i^{2}+i^{3}+.....+i^{23}=$ কত?",
      options: ["-1", "-i", "1", "i"],
      explanation: "",
      right_option: 0,
      selected_option: null,
    },
    {
      question_id: 30,
      question: "$\\sqrt{2+8\\sqrt{5}i}=?$ ",
      options: [
        "$\\pm(\\sqrt{10}+\\sqrt{8}i)$",
        "$\\pm(\\sqrt{8}+\\sqrt{10}i)$",
        "$\\pm(\\sqrt{10}+\\sqrt{2}i)$",
        "$\\pm(\\sqrt{10}+\\sqrt{4}i)$",
      ],

      explanation:
        "$r=\\sqrt{2^{2}+{(8\\sqrt{5})}^2}=18  \\newline $ বর্গমূল = $\\pm \\frac{1}{\\sqrt{2}}(\\sqrt{18+2}  + i\\sqrt{18-2}) \\newline =\\pm \\frac{1}{\\sqrt{2}}(\\sqrt{20}  + i\\sqrt{16}) \\newline =\\pm \\frac{1}{\\sqrt{2}}(2\\sqrt{5}  + i4)  = \\pm \\frac{1}{\\sqrt{2}}.2.(\\sqrt{5}  + 2i) =\\pm(\\sqrt{10}+\\sqrt{8}i)$",
      right_option: 0,
      selected_option: null,
    },
    {
      question_id: 31,
      question: ` $ -i $ এর  বর্গমূল-`,
      options: [
        "$\\pm (\\frac{1}{2} -i)$",
        "$\\pm (\\frac{1}{2} +i)$",
        "$\\pm \\frac{1}{\\sqrt{2}} (1-i)$",
        "$\\pm (1+\\frac{i}{2} )$",
      ],
      explanation: ``,
      right_option: 0,
    },
    {
      question_id: 32,
      question: ` $\\sqrt{i} + \\sqrt{-i} $ এর  মান  কোনটি?`,
      options: ["$2$", "$1$", "$\\sqrt{2}$", "$0$"],
      explanation: ``,
      right_option: 0,
    },
    {
      question_id: 33,
      question: ` যদি  1  এর  একটি  ঘনমূল  $\\omega $ হয়  তবে  $ (1+ \\omega +\\omega^2) $ এর  মান  কত?`,
      options: [" 0", " 1", " -1", " 2"],
      explanation: `$(1+\\omega+\\omega^2)=0$`,
      right_option: 0,
    },
    {
      question_id: 34,
      question: ` $ 1 + \\omega^{19999} +  \\omega^{15557} = ?$ `,
      options: ["$0$", "$1$", "$-1$", "$2$"],
      explanation: ``,
      right_option: 0,
    },
    {
      question_id: 35,
      question: `$\\omega$ যদি এককের একটি জটিল (কাল্পনিক) ঘনমূল হয়, তবে $ (1-\\omega+\\omega^2)(1-\\omega^2+\\omega^4) $ এর  মান- `,
      options: ["4", "6", "3", "2"],
      explanation: `$(1-\\omega+ \\omega^2)(1-\\omega^2+\\omega^4) [\\because \\omega^4 = \\omega^3\\omega = \\omega]$
    <br>
    $=(1-\\omega+ \\omega^2-2\\omega) (1-\\omega^2+\\omega^4-2\\omega^2)=(-2\\omega)(-2\\omega^2)=4\\omega^3=4$
    `,
      right_option: 0,
    },
    {
      question_id: 36,
      question:
        "$\\omega যদি একটি জটিল ঘনমূল হয় তবে (১-\\omega)^2(1-\\omega^2)^2=?$",
      options: ["1", "3", "$\\omega^2$", "9"],
      explanation:
        "$(1-\\omegas)^2(1-\\omega^2)^2=(1-2\\omega+\\omegaa^2)(1-2\\omega^2+\\omega^2)=(1+\\omega+\\omega+\\omega^2-3\\omega)(1-2\\omega^2+\\omega^2+\\omega)=(3\\omega)(\\omega^2)=9$",
      right_option: 3,
    },
    {
      question_id: 37,
      question:
        "$\\omega এককের একটি নির্দিষ্ট ঘনমূল হলে রাশিমালা (1+\\omega-\\omega^5)(\\omega+\\omega^2-1)(\\omega^5+1-\\omega) এর মান- $",
      options: ["4", "8", "-8", "-4"],
      explanation:
        "$(1+\\omega-\\omega^5)(\\omega+\\omega^2-1)(\\omega^5+1-\\omega)=(-2\\omega^2)(-2)(-2\\omega)=-8\\omega^3=-8$",
      right_option: 2,
    },
    {
      question_id: 38,
      question: " $(-1+\\sqrt-3)^4+(-1-\\sqrt-3)^4=?$ ",
      options: ["-1", "-4", "-9", "-16"],
      explanation:
        " $(-1+\\sqrt-3)^4+(-1-\\sqrt-3)^4=(2\\omega)^4+(2\\omega^2)^=16\\omega^4+16\\omega^8=16\\omega+16\\omega^2=16(\\omega+omega^2)=16*(-1)=-16$",
      right_option: 3,
    },
    {
      question_id: 39,
      question: "Z  জটিল  সংখ্যা  হলে ।z-2| =5  দ্বারা কিসের সমীকরণ বুঝায়? ",
      options: ["সরলরেখা", "বৃত্ত", "পরাবৃত্ত ", "অধিবৃত্ত "],
      explanation:
        "$।z-2।=5\\Rightarrow| x+iy-2|=5\\Rightarrow\\sqrt((x-2)^2+y^2)=5$",
      right_option: 1,
    },
    {
      Question_id: 40,
      question:
        "z=z+iy হইলে ।z-5|=3 দ্বারা নির্দেশিত সঞ্চারপথের সমীকরণ একটি বৃও হলে,ইহার কেন্দ্র কত ? ",
      options: ["(0,5)", "(5,0)", "(0,-5)", "(-5,0)"],
      explanation:
        "$|z-5|=3\\Rightarrow|x+iy-5|=3\\Rightarrow(x-5)^2+y^2=3^2 এর কেন্দ্র (5,0)$ ",
      right_option: 1,
    },
  ],
  wrong_percentage: 0,
  score: 0,
  correct_percentage: 0,
  total_wrong: 0,
  exam_code: "ekrbyo",
  student_name: "",
  score_percentage: 0,
  total_correct: 0,
  id: "",
  skipped_mcq: 0,
  skipped_percentage: 0,
};
