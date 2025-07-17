import { Container, Typography, Grid } from "@mui/material";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Choose Your Quiz
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {quizzes.map((quiz) => (
          <Grid key={quiz.name}>
            <QuizCard title={quiz.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
