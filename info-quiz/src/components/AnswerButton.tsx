import { Button } from "@mui/material";

type Props = {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect?: boolean;
  showFeedback: boolean;
};

const AnswerButton = ({
  text,
  onClick,
  isSelected,
  isCorrect,
  showFeedback,
}: Props) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{
        marginY: 1,
        color: "white",
        fontWeight: 600,
        backgroundColor: showFeedback
          ? isCorrect
            ? "green"
            : isSelected
            ? "red"
            : "gray"
          : "gray",
        "&:hover": {
          backgroundColor: showFeedback
            ? isCorrect
              ? "darkgreen"
              : isSelected
              ? "darkred"
              : "darkgray"
            : "darkgray",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default AnswerButton;
