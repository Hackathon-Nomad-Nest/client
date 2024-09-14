import React from 'react';
import MUILoadingButton, { LoadingButtonProps as MUILoadingButtonProps } from '@mui/lab/LoadingButton';
import { SxProps, Theme } from '@mui/system';

interface ILoadingButtonProps extends MUILoadingButtonProps {
  label?: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
}

const LoadingButton: React.FC<ILoadingButtonProps> = ({ onClick, label = '', sx = {}, ...restProps }) => (
  <MUILoadingButton
    color="primary"
    onClick={onClick}
    variant="contained"
    sx={{
      padding: '10px 24px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      boxShadow: '1px 1px 1px 0px rgba(68, 97, 242, 0.15)',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      ...sx,
    }}
    {...restProps}
  >
    {label}
  </MUILoadingButton>
);

export default LoadingButton;
