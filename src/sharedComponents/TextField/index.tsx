import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

const TextField: React.FC<TextFieldProps> = ({ label, value, onChange, ...props }) => {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      multiline
      rows={4}
      {...props}
    />
  );
};

export default TextField;
