import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Box from 'src/sharedComponents/Box';
import StyledBox from './style';
import { IMusicCard } from 'src/lib/types';
import React from 'react';

const MusicCard = ({ name, artist, details } : IMusicCard) => {
  return (
    <>
      <StyledBox className='flex items-center p-4 bg-white'>
        <Box className='flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12'>
          <MusicNoteIcon />
        </Box>

        <Box className='ml-4'>
          <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
          <p className='text-gray-600'>{artist}</p>
          <p className='text-gray-600'>{details}</p>
        </Box>
      </StyledBox>
    </>
  );
};

export default React.memo(MusicCard);
