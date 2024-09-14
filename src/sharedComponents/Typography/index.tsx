import React from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

interface TypographyProps extends MuiTypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'subtitle1' | 'subtitle2' | 'overline' | 'button';
  gutterBottom?: boolean;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body1', gutterBottom = false, ...props }) => {
  return (
    <MuiTypography
      variant={variant}
      gutterBottom={gutterBottom}
      sx={{
        margin: gutterBottom ? '0 0 16px' : '0',
      }}
      {...props}
    />
  );
};

export default Typography;
