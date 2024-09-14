import React, { ChangeEvent, ReactNode } from 'react';
import TextField from '@mui/material/TextField';

interface InputProps extends React.ComponentProps<typeof TextField> {
  label?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, onChange, ...props }) => (
  <TextField
    label={label}
    onChange={onChange}
    variant="outlined"
    fullWidth
    {...props}
  />
);

export default Input;
