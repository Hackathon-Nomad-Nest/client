import { ActivityIcon, BreakfastIcon, CheckInIcon, DepartureIcon, LunchIcon } from 'src/Assets/Icons';
import { IApproachStep, IFaq } from './types';

export const FAQs: IFaq[] = [
  {
    question: 'What is a travel itinerary?',
    answer:
      'A travel itinerary is a detailed plan or schedule of your trip, including dates, destinations, accommodations, activities, and other essential information to help you organize your travel.',
  },
  {
    question: 'How can I create a travel itinerary on your website?',
    answer:
      'You can create a travel itinerary by signing up or logging in to our website, selecting your destinations and dates, and adding activities and accommodations to your itinerary. Our platform will help you organize and manage your trip.',
  },
  {
    question: 'Can I edit my itinerary after creating it?',
    answer:
      'Yes, you can edit your itinerary at any time. Simply log in to your account, go to your itinerary, and make any necessary changes or updates.',
  },
  {
    question: 'What should I include in my travel itinerary?',
    answer:
      'Include important details such as flight information, hotel reservations, transportation, daily activities, and any other relevant information like restaurant reservations or local attractions.',
  },
  {
    question: 'Is it possible to share my itinerary with others?',
    answer:
      'Yes, you can share your itinerary with friends or family by sending them a link or exporting the itinerary to a PDF that you can share via email or messaging apps.',
  },
  {
    question: 'Do you offer travel insurance?',
    answer:
      'Our website does not offer travel insurance directly as of now but we are considering the same in future release.',
  },
];

export const itinerarySteps: IApproachStep[] = [
  {
    stepNo: 1,
    title: "Location & Travel Party Size",
    description: "Identify and choose destinations based on user preferences and gather information on the number of travelers."
  },
  {
    stepNo: 2,
    title: 'Types of Trip',
    description: 'Determine the nature of the trip—relaxing, adventurous, etc.',
  },
  {
    stepNo: 3,
    title: "Duration",
    description: "Specify the number of days for the itinerary."
  },
  {
    stepNo: 4,
    title: "Budget Range & Mode of Transport",
    description: "Request the user's budget range and determine preferred modes of transportation."
  },
  {
    stepNo: 5,
    title: "Duration",
    description: "Specify the number of days for the itinerary."
  }
]

export const STORAGE_KEYS = {
  userKey: 'userKey',
};

export const getIconComponent = (key: string) => {
  switch (key) {
    case 'departure':
      return DepartureIcon;
    case 'lunch':
      return LunchIcon;
    case 'breakfast':
      return BreakfastIcon;
    case 'dinner':
      return LunchIcon;
    case 'check_in':
      return CheckInIcon;
    case 'check_out':
      return CheckInIcon;
    case 'morning_activity':
      return ActivityIcon;
    case 'afternoon_activity':
      return ActivityIcon;
    case 'evening_activity':
      return ActivityIcon;
    default:
      return DepartureIcon;
  }
};
