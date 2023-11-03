import * as React from "react";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";

interface CustomButtonProps {
  name: string;
  to: string;
  onClick: () => void;
}
const CustomButton: React.FC<CustomButtonProps> = ({ name, to, onClick }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(to);
  };
  return (
    <Button
      onClick={() => {
        onClick();
        navigateTo();
      }}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
