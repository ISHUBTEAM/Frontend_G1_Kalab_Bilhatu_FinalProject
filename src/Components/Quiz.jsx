import React, { useState } from 'react';
import './Quiz.css';
const quizData = {
  html: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: 0 },
    { question: "Which tag is used for paragraphs?", options: ["<div>", "<p>", "<span>"], answer: 1 },
    { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>"], answer: 1 },
    { question: "What tag is used for images?", options: ["<img>", "<src>", "<picture>"], answer: 0 },
    { question: "Which attribute sets the image source?", options: ["href", "src", "link"], answer: 1 },
    { question: "Which tag defines a table row?", options: ["<td>", "<tr>", "<th>"], answer: 1 },
    { question: "What does <ul> represent?", options: ["Unordered List", "User List", "Universal List"], answer: 0 },
    { question: "Which tag is used for headings?", options: ["<head>", "<h1>", "<title>"], answer: 1 },
    { question: "What is the root element of HTML?", options: ["<html>", "<body>", "<main>"], answer: 0 },
    { question: "Which tag is used for metadata?", options: ["<meta>", "<data>", "<info>"], answer: 0 }
  ],
  css: [
    { question: "Which property sets text color?", options: ["color", "text-color", "font-color"], answer: 0 },
    { question: "Which unit is relative to font size?", options: ["px", "em", "cm"], answer: 1 },
    { question: "Which property sets background color?", options: ["bg", "background", "background-color"], answer: 2 },
    { question: "How do you center text?", options: ["text-align: middle", "text-align: center", "align: center"], answer: 1 },
    { question: "Which property sets font size?", options: ["font-style", "text-size", "font-size"], answer: 2 },
    { question: "Which selector targets all elements?", options: ["*", "all", "body"], answer: 0 },
    { question: "Which property adds space inside?", options: ["margin", "padding", "border"], answer: 1 },
    { question: "Which property adds space outside?", options: ["padding", "margin", "outline"], answer: 1 },
    { question: "Which property sets border thickness?", options: ["border-width", "border-size", "border-thickness"], answer: 0 },
    { question: "Which property makes text bold?", options: ["font-weight", "font-bold", "text-style"], answer: 0 }
  ],
  js: [
    { question: "Which keyword declares a variable?", options: ["var", "int", "define"], answer: 0 },
    { question: "Which symbol is used for comments?", options: ["//", "/*", "#"], answer: 0 },
    { question: "Which method logs to console?", options: ["print()", "log()", "console.log()"], answer: 2 },
    { question: "Which operator checks equality?", options: ["==", "===", "="], answer: 1 },
    { question: "Which type is used for text?", options: ["string", "text", "char"], answer: 0 },
    { question: "Which keyword defines a function?", options: ["func", "function", "def"], answer: 1 },
    { question: "Which method adds array items?", options: ["push()", "add()", "insert()"], answer: 0 },
    { question: "Which loop repeats a block?", options: ["repeat", "for", "loop"], answer: 1 },
    { question: "Which value is falsy?", options: ["true", "1", "0"], answer: 2 },
    { question: "Which object handles dates?", options: ["Date", "Time", "Calendar"], answer: 0 }
  ],
  react: [
    { question: "What is React?", options: ["Library", "Framework", "Language"], answer: 0 },
    { question: "What is JSX?", options: ["JavaScript XML", "Java Syntax", "JSON Extension"], answer: 0 },
    { question: "Which hook manages state?", options: ["useEffect", "useState", "useContext"], answer: 1 },
    { question: "Which function renders UI?", options: ["render()", "return()", "display()"], answer: 1 },
    { question: "Which hook runs side effects?", options: ["useState", "useEffect", "useMemo"], answer: 1 },
    { question: "Which tag wraps multiple elements?", options: ["<div>", "<Fragment>", "<section>"], answer: 1 },
    { question: "Which prop passes data?", options: ["data", "props", "value"], answer: 1 },
    { question: "Which hook shares global state?", options: ["useReducer", "useContext", "useGlobal"], answer: 1 },
    { question: "Which method updates DOM?", options: ["setState", "update()", "refresh()"], answer: 0 },
    { question: "Which file starts the app?", options: ["index.js", "main.jsx", "app.js"], answer: 0 }
  ]
};
function Quiz({ onComplete }) {
  const [topic, setTopic] = useState(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState('');
  const startQuiz = (selectedTopic) => {
    setTopic(selectedTopic);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setFeedback('');
  };
  const handleAnswer = (index) => {
    const correct = index === quizData[topic][current].answer;
    if (correct) {
      setScore(prev => prev + 1);
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Incorrect.');
    }
    setTimeout(() => {
      setFeedback('');
      if (current + 1 < quizData[topic].length) {
        setCurrent(prev => prev + 1);
      } else {
        setFinished(true);
        const finalScore = Math.round(((score + (correct ? 1 : 0)) / quizData[topic].length) * 100);
        if (onComplete) onComplete(finalScore);
      }
    }, 1000);
  };

  const goBack = () => {
    setTopic(null);
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setFeedback('');
  };

  return (
    <div className="quiz-container">
      {!topic ? (
        <>
          <h2>Select a Topic</h2>
          <div className="topic-buttons">
            {Object.keys(quizData).map((key) => (
              <button key={key} onClick={() => startQuiz(key)}>{key.toUpperCase()}</button>
            ))}
          </div>
        </>
      ) : !finished ? (
        <>
          <button className="back-btn" onClick={goBack}>← Back</button>
          <h3>{quizData[topic][current].question}</h3>
          <ul>
            {quizData[topic][current].options.map((opt, i) => (
              <li key={i} onClick={() => handleAnswer(i)}>{opt}</li>
            ))}
          </ul>
          {feedback && <p className="feedback">{feedback}</p>}
        </>
      ) : (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {Math.round((score / quizData[topic].length) * 100)}%</p>
          <button onClick={goBack}>Try Another Topic</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
