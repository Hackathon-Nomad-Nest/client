import React, { ReactNode } from 'react';
import BoxMUI, { BoxProps as MuiBoxProps } from '@mui/material/Box';

interface IBoxProps extends MuiBoxProps {
  children?: ReactNode;
}

const Box: React.FC<IBoxProps> = ({ children = <span />, ...props }) => (
  <BoxMUI {...props}>
    {children}
  </BoxMUI>
);

export default Box;
