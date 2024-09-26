import React from 'react';
import { Link } from 'react-router-dom';
import Box from 'src/sharedComponents/Box';
import mount from '../../Assets/mountains-trimmed.mp4';
import { routes } from 'src/routes/routeConstants';

const VideoBackground = () => {
  return (
    <Box>
      <Box className='xl:mt-[140px]'>
        <video className='bg-img' src={mount} autoPlay loop muted />
        <Box className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 xl:mx-[80px] md:items-center p-10'>
          <Box>
            <h1 className='block text-3xl font-bold text-gray-100 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-natural-100'>
              Start your journey with <span className='text-gray-900'>NomadNest</span>
            </h1>
            <p className='mt-3 text-lg text-gray-100 dark:text-natural-100'>
              Hand-picked journey with cutting edge AI.
            </p>

            <Box className='mt-7 grid gap-3 w-full sm:inline-flex'>
              <Link
                to={routes.EXPLORE}
                className='py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-customTeal text-gray-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
              >
                Explore
                <svg
                  className='shrink-0 size-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </Link>
              <Link
                to='/itinerary-details-form'
                className='py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-customTeal shadow-sm  focus:outline-none focus:bg-customTeal disabled:opacity-50 disabled:pointer-events-none'
              >
                Plan a trip
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(VideoBackground);
