export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  question: string;
  answers: AnswerOption[];
}

export default interface QuizCategory {
  name: string;
  questions: Question[];
}
