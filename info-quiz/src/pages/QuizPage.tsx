import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizzes } from "../data";
import { useQuiz } from "../context/QuizContext";
import { Container, Typography, Box } from "@mui/material";
import QuestionView from "../components/QuestionView";
import NavButton from "../components/NavButton";

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const {
    setCategory,
    currentCategory,
    questions,
    currentIndex,
    submitAnswer,
    nextQuestion,
  } = useQuiz();

  useEffect(() => {
    if (!category || currentCategory !== category) {
      const quiz = quizzes.find((q) => q.name === category);
      if (quiz) {
        setCategory(quiz.name, quiz.questions);
      } else {
        navigate("/");
      }
    }
  }, [category]);

  if (!questions.length) return null;

  const handleSelect = (index: number) => {
    setSelected(index);
    submitAnswer(index);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      navigate("/results");
    } else {
      nextQuestion();
      setSelected(null);
      setShowFeedback(false);
    }
  };

  return (
    <Container>
      <Typography variant="h5" mb={3}>
        {category} Quiz
      </Typography>
      <QuestionView
        question={questions[currentIndex]}
        selectedAnswer={selected}
        onSelect={handleSelect}
        showFeedback={showFeedback}
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <NavButton label="Home" onClick={() => navigate("/")} />
        {showFeedback && <NavButton label="Next" onClick={handleNext} />}
      </Box>
    </Container>
  );
};

export default QuizPage;
