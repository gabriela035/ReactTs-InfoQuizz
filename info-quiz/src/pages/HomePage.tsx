import { Container, Typography, Grid, Box } from "@mui/material";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data";

const HomePage = () => {
  return (
    <Box sx={{ alignContent: "center", justifyContent: "center" }}>
      <Container sx={{ alignContent: "center", display: "flex" }}>
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2phbW5ybmZvM2RlYnIybWlmNjd3eDdmem5ybTZob242bTM4ams3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/exnOGAkUfpQVW/giphy.gif"
          alt="Quiz GIF"
          style={{ width: "50px", height: "80px" }}
        />
        <Typography variant="h4" align="center" marginTop={7}>
          Choose Your Quiz
        </Typography>
      </Container>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignContent="center"
        display={"flex"}
      >
        {quizzes.map((quiz) => (
          <Grid key={quiz.name}>
            <QuizCard title={quiz.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
