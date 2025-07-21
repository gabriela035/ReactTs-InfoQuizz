import { Button } from "@mui/material";

type Props = {
  label: string;
  onClick: () => void;
};

const NavButton = ({ label, onClick }: Props) => (
  <Button
    variant="contained"
    onClick={onClick}
    sx={{ m: 1, backgroundColor: "#9d3f1aff" }}
  >
    {label}
  </Button>
);

export default NavButton;
