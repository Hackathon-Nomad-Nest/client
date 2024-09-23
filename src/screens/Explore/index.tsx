// import React from 'react'
import { useCallback, useEffect, useState } from 'react';
import travel from '../../Assets/img/travel.jpg';
import { Link } from 'react-router-dom';
import AboutUs from 'src/components/AboutUs';
import { routes } from 'src/routes/routeConstants';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonIcon from '@mui/icons-material/Person';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { getItenaryPlan } from 'src/api/plan';
import { ItineraryDetailsValues } from 'src/lib/types';
import { getImageUrl } from 'src/api/imageUrl';
import { IImageProps } from 'src/components/DayCard';
import { removeDuplicates } from 'src/lib/helper';

const Explore = () => {
  const [dataItenary, setDataItenary] = useState<ItineraryDetailsValues[]>();
  const [imageUrl, setImageUrl] = useState<Record<string, IImageProps[]>>({});

  const generateKeyArray = useCallback(() => {
    const keyArray = dataItenary?.map((plan) => plan.to);
    return removeDuplicates(keyArray ?? []);
  }, [dataItenary]);

  const fetchPlanDetails = useCallback(async () => {
    try {
      const planResponse = await getItenaryPlan();
      console.log(planResponse);
      setDataItenary(
        planResponse.results
          .map((res: { travelInput: ItineraryDetailsValues; id: string }) => ({ ...res.travelInput, id: res.id }))
          .filter((details: ItineraryDetailsValues) => details)
      );
    } catch (error) {
      console.error('Failed to fetch plan details', error);
    }
  }, []);

  useEffect(() => {
    fetchPlanDetails();
  }, [fetchPlanDetails]);

  const fetchImageUrl = useCallback(async () => {
    try {
      const data = generateKeyArray();
      const imageUrlResponse = await getImageUrl(data);
      if (imageUrlResponse?.result?.result) {
        setImageUrl(imageUrlResponse?.result?.result);
      }
    } catch (error) {
      console.error('Failed to fetch plan details', error);
    }
  }, [generateKeyArray]);

  useEffect(() => {
    fetchImageUrl();
  }, [dataItenary, fetchImageUrl]);

  return (
    <div className=''>
      {/* head section */}
      <div className='bg-transparent'>
        <img src={travel} alt='' className='absolute -z-10 top-0' />
        <div className='max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24'>
          <h1 className='font-semibold text-white text-4xl md:text-6xl'>
            <span className='text-customPeach '>NomadNest</span> Transforming wishes into journey
          </h1>
          <div className='max-w-4xl'>
            <p className='mt-5 text-white sm:text-lg text-sm'>NomadNest: Your Journey, Perfectly Tailored with AI.</p>
          </div>
        </div>
        <div className='relative overflow-hidden pt-4 '>
          <div className='max-w-sm mx-auto mb-20 flex justify-center'>
            <Link
              to={routes.ITINERARY_DETAILS_FORM}
              className='w-fit py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl bg-customTeal text-gray-100 shadow-sm hover:bg-customTeal focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
            >
              Plan a Trip
            </Link>
          </div>
        </div>
      </div>

      {/* journey cards */}
      <div className='heading sm:mt-24 mt-12 bg-white'>
        <p className='text-4xl text-bold text-customTeal px-4 py-6 sm:px-6 lg:px-8 lg:py-8 mx-auto'>Explore Plans</p>
      </div>
      <div className='w-full px-4 py-6 sm:px-6 lg:px-8 lg:pb-14 bg-white'>
        <div className=' no-scrollbar flex overflow-x-scroll gap-6 w-full scrollbar-none'>
          {dataItenary?.map((item: ItineraryDetailsValues) => {
            return (
              <div
                key={item.id}
                className='group glass min-w-[280px] flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl'
              >
                <div className='h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl'>
                  <img
                    src={item.to in imageUrl ? imageUrl[item.to]?.[0].url : travel}
                    className='h-full w-full rounded-t-xl'
                    alt='destination image'
                  />
                </div>
                <div className='p-4 md:p-6'>
                  <span className='block mb-1 text-md font-semibold uppercase text-black'>
                    <CurrencyRupeeIcon fontSize='small' />
                    {item.budget}
                  </span>
                  <p className='mt-3 text-gray-900 text-md'>
                    From: <strong>{item.from}</strong> - To <strong>{item.to}</strong>
                  </p>
                  <p className='mt-3 text-gray-900 text-md'>
                    <PersonIcon fontSize='small' /> {item.adults} People
                  </p>
                  <p className='mt-3 text-gray-900 text-md'>
                    <ChildCareIcon fontSize='small' /> {item.kids} Kids
                  </p>
                  <p className='mt-3 text-gray-900 text-md'>
                    <EditCalendarIcon fontSize='small' /> {item.numberOfDays} Days
                  </p>
                </div>
                <div className='mt-auto flex border-t border-gray-200 divide-x divide-gray-200'>
                  <Link
                    to={`/itinerary-details-form/${item.id}`}
                    className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'
                  >
                    Customize
                  </Link>
                  <Link
                    to={`/plan-detail/${item.id}`}
                    className='w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'
                  >
                    View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* about us */}
      <AboutUs />
    </div>
  );
};

export default Explore;
