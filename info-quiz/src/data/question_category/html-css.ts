import type QuizCategory from "../../types/quiz";

const htmlcssQuiz: QuizCategory = {
  name: "Web Development",
  questions: [
    {
      id: "1",
      question: "What does HTML stand for?",
      answers: [
        { text: "Hyper Text Markup Language", isCorrect: true },
        { text: "Hot Mail", isCorrect: false },
        { text: "How To Make Lasagna", isCorrect: false },
        { text: "Hyperlinks and Text Markup Language", isCorrect: false },
      ],
    },
    {
      id: "2",
      question: "What does CSS stand for?",
      answers: [
        { text: "Creative Style Sheets", isCorrect: false },
        { text: "Cascading Style Sheets", isCorrect: true },
        { text: "Computer Style Sheets", isCorrect: false },
        { text: "Colorful Style Sheets", isCorrect: false },
      ],
    },
  ],
};

export default htmlcssQuiz;
