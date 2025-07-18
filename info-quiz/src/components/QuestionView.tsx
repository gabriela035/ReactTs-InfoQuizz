import { Typography, Box } from "@mui/material";
import type { Question } from "../types/quiz";
import AnswerButton from "./AnswerButton";

type Props = {
  question: Question;
  onSelect: (answerIndex: number) => void;
  selectedAnswer: number | null;
  showFeedback: boolean;
};

const QuestionView = ({
  question,
  onSelect,
  selectedAnswer,
  showFeedback,
}: Props) => {
  return (
    <Box>
      <Typography variant="h6" mb={2}>
        {question.question}
      </Typography>
      {question.answers.map((ans, index) => {
        // Determine if the current answer is correct
        const isCorrectAnswer = ans.isCorrect;
        const isSelected = selectedAnswer === index;

        return (
          <AnswerButton
            key={index}
            text={ans.text}
            isSelected={isSelected}
            isCorrect={isCorrectAnswer}
            showFeedback={showFeedback}
            onClick={() => onSelect(index)}
          />
        );
      })}
    </Box>
  );
};

export default QuestionView;
