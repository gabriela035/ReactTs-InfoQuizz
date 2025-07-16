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
  let color: "success" | "error" | "primary" = "primary";

  if (showFeedback) {
    if (isCorrect) color = "success";
    else if (isSelected && !isCorrect) color = "error";
  }

  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ marginY: 1 }}
      color={color}
      onClick={onClick}
      disabled={showFeedback}
    >
      {text}
    </Button>
  );
};

export default AnswerButton;
