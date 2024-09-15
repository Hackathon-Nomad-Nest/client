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
    title: "Location Selection",
    description: "Identify and choose destinations based on user preferences."
  },
  {
    stepNo: 2,
    title: "Types of Trip",
    description: "Determine the nature of the trip—relaxing, adventurous, etc."
  },
  {
    stepNo: 3,
    title: "Travel Party Size",
    description: "Gather information on the number of travelers."
  },
  {
    stepNo: 4,
    title: "Duration",
    description: "Specify the number of days for the itinerary."
  },
  {
    stepNo: 5,
    title: "Budget Range",
    description: "Request the user's budget range."
  },
  {
    stepNo: 6,
    title: "Mode of Transport",
    description: "Determine preferred modes of transportation."
  },
  {
    stepNo: 7,
    title: "Duration",
    description: "Specify the number of days for the itinerary."
  }
];


export const STORAGE_KEYS = {
  userKey: 'userKey',
};
