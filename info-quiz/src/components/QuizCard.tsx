import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { responsiveCardWidth } from "../utils/responsiveWidth";

type Props = {
  title: string;
};

const QuizCard = ({ title }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${encodeURIComponent(title)}`);
  };

  return (
    // <Card sx={{ width: responsiveCardWidth, maxWidth: 345, margin: 2 }}>
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuizCard;
