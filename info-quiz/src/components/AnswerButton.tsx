import { Button } from "@mui/material";

type Props = {
  text: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect?: boolean;
  showFeedback: boolean;
  disabled?: boolean;
};

const AnswerButton = ({
  text,
  onClick,
  isSelected,
  isCorrect,
  showFeedback,
  disabled,
}: Props) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{
        marginY: 1,
        color: "white",
        fontWeight: 600,
        backgroundColor: showFeedback
          ? isCorrect
            ? "green"
            : isSelected
            ? "red"
            : undefined // default MUI color
          : undefined,
        "&:hover": {
          backgroundColor: showFeedback
            ? isCorrect
              ? "darkgreen"
              : isSelected
              ? "darkred"
              : undefined
            : undefined,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default AnswerButton;
