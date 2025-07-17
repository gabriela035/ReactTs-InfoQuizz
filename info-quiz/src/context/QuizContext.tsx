import React, { createContext, useContext, useState } from "react";
import type { Question } from "../types/quiz";

type UserAnswer = {
  question: Question;
  selectedIndex: number;
};

interface QuizContextType {
  currentCategory: string;
  questions: Question[];
  currentIndex: number;
  userAnswers: UserAnswer[];
  score: number;
  setCategory: (name: string, questions: Question[]) => void;
  submitAnswer: (index: number) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);

  const setCategory = (name: string, questions: Question[]) => {
    setCurrentCategory(name);
    setQuestions(questions);
    setCurrentIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  const submitAnswer = (index: number) => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = currentQuestion.answers[index].isCorrect;

    setUserAnswers((prev) => [
      ...prev,
      { question: currentQuestion, selectedIndex: index },
    ]);

    if (isCorrect) setScore((prev) => prev + 1);
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <QuizContext.Provider
      value={{
        currentCategory,
        questions,
        currentIndex,
        userAnswers,
        score,
        setCategory,
        submitAnswer,
        nextQuestion,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
