import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuiz } from "../context/QuizContext";
import NavButton from "../components/NavButton";

const ResultsPage = () => {
  const { userAnswers, score, questions, resetQuiz } = useQuiz();
  const total = questions.length;

  const getColor = (userAnswerIndex: number, correctIndex: number) =>
    userAnswerIndex === correctIndex ? "success" : "error";

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExemN4dWJwNHZ3eWVyem5pcnZyY2l2cWtuajFiZjh3aHNudXVyZ3NxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IDjrgUoFMGyKqy7Rn7/giphy.gif"
          alt="Quiz GIF"
          style={{ width: "55px", height: "66px" }}
        />
        <Typography variant="h4" align="center" gutterBottom>
          Quiz Finished!
        </Typography>
      </Box>
      <Typography variant="h6" align="center" mb={3}>
        You answered {score} out of {total} correctly
      </Typography>

      <Box display="flex" justifyContent="center" gap={2} mb={3}>
        <NavButton label="Repeat Quiz" onClick={resetQuiz} />
        <NavButton label="Home" onClick={() => (location.href = "/")} />
      </Box>

      <Typography variant="h6" gutterBottom>
        Answer Review
      </Typography>

      {userAnswers.map((entry, i) => {
        const correctIndex = entry.question.answers.findIndex(
          (a) => a.isCorrect
        );
        const userIndex = entry.selectedIndex;
        const isCorrect = userIndex === correctIndex;

        return (
          <Accordion key={entry.question.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={isCorrect ? "green" : "red"}>
                Q{i + 1}: {entry.question.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {entry.question.answers.map((answer, index) => (
                <Chip
                  key={index}
                  label={answer.text}
                  color={
                    index === correctIndex
                      ? "success"
                      : index === userIndex
                      ? "error"
                      : "default"
                  }
                  sx={{ m: 0.5 }}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

export default ResultsPage;
