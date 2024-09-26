import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import wing from '../../Assets/img/planeWing.jpg';
import { routes } from 'src/routes/routeConstants';
import React from 'react';
import { itinerarySteps } from 'src/lib/constants';
import Step from './Step';

const OurApproach = () => {
  return (
    <div className='bg-white py-12 xl:mt-[270px]'>
      <div className='max-w-5xl px-4 xl:px-0 lg:pb-20 mx-auto'>
        <div className='max-w-3xl mb-10 lg:mb-14'>
          <h2 className='text-black font-semibold text-2xl md:text-4xl md:leading-tight'>Our approach</h2>
          <p className='mt-1 text-gray-800'>
            Our approach to creating customized travel itinerary plans is centered around collecting user inputs, such
            as preferred destinations, budget, and travel dates. We then personalize the itinerary using this data,
            combined with the response from the integrated AI, to suggest tailored travel plans that best match the
            user's preferences.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center'>
          <div className='aspect-w-16 aspect-h-9 lg:aspect-none'>
            <img className='w-full object-cover rounded-xl' src={wing} alt='Features Image' />
          </div>

          <div>
            <div className='mb-4'>
              <h3 className='text-gray-800 text-xs font-medium uppercase'>Steps</h3>
            </div>

            {itinerarySteps.map((step, index) => (
              <Step {...step} key={step.stepNo + index} />
            ))}

            <Link
              to={routes.ITINERARY_DETAILS_FORM}
              className='group inline-flex items-center gap-x-2 py-2 px-3 bg-customTeal font-medium text-sm text-neutral-100 rounded-full focus:outline-none'
            >
              Create Itinerary <AddCircleOutlineIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(OurApproach);
