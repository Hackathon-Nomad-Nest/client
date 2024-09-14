import React from 'react';
import Button, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

interface ICustomButtonProps extends MUIButtonProps {
  label: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button {...props}>
      {label}
    </Button>
  );
};

export default CustomButton;
