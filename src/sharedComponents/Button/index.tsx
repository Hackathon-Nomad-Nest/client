import React from 'react';
import Button, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

interface CustomButtonProps extends MUIButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button {...props}>
      {label}
    </Button>
  );
};

export default CustomButton;
