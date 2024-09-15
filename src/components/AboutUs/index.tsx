import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'src/routes/routeConstants';
import Box from 'src/sharedComponents/Box';

const AboutUs = ({ buttonPresent }: any) => {
  return (
    <Box className='relative overflow-hidden'>
      <Box aria-hidden='true' className='flex absolute -top-96 start-1/2 transform -translate-x-1/2'>
        <Box className='bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]'></Box>
        <Box className='bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]'></Box>
      </Box>

      <Box className='relative z-10'>
        <Box className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16'>
          <Box className='max-w-2xl text-center mx-auto'>
            <p className='inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent'>
              Nomad Nest
            </p>

            <Box className='mt-5 max-w-2xl'>
              <h1 className='block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl'>
                Ultimate Trip Planner
              </h1>
            </Box>

            <Box className='mt-5 max-w-3xl'>
              <p className='text-lg text-gray-600'>
                At <strong>NomadNest</strong>, we redefine the way you travel by combining the power of AI with
                personalized trip planning. Our platform offers fully customizable itineraries, allowing you to explore
                the world on your terms. Whether it's finding hidden gems or crafting a seamless travel experience,
                NomadNest ensures every journey is tailored to your unique preferences, delivering an unforgettable
                adventure every time.
              </p>
            </Box>

            <Box className='mt-8 gap-3 flex justify-center'>
              <Link
                to={routes.EXPLORE}
                className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-customTeal text-white disabled:opacity-50 disabled:pointer-events-none'
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
                to={routes.ITINERARY_DETAILS_FORM}
                className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
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

export default React.memo(AboutUs);
