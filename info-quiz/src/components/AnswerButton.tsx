import { Button, useTheme } from "@mui/material";

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
  isCorrect = false,
  showFeedback,
  disabled,
}: Props) => {
  const theme = useTheme();

  let backgroundColor: string | undefined;
  let hoverColor: string | undefined;
  let textColor: string | undefined;

  const isAnsweredCorrectly = isSelected && isCorrect;
  const isAnsweredIncorrectly = isSelected && !isCorrect;
  const isRevealCorrect = !isSelected && isCorrect;

  if (showFeedback) {
    if (isAnsweredCorrectly) {
      backgroundColor = "#273f29ff";
      hoverColor = theme.palette.success.dark;
      textColor = "white";
    } else if (isAnsweredIncorrectly) {
      backgroundColor = "#6f0000d5";
      hoverColor = theme.palette.error.dark;
      textColor = "white";
    } else if (isRevealCorrect) {
      backgroundColor = theme.palette.success.main;
      hoverColor = theme.palette.success.dark;
      textColor = undefined; // keep default text
    }
  }

  return (
    <Button
      fullWidth
      variant={"contained"}
      onClick={onClick}
      // DON'T use disabled prop; override interaction via sx
      sx={{
        marginY: 1,
        fontWeight: 600,
        backgroundColor: backgroundColor ?? "#cb5e3c",
        color: textColor,
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.8 : 1, // slight fade if needed
        "&:hover": {
          backgroundColor: hoverColor ?? backgroundColor,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default AnswerButton;
