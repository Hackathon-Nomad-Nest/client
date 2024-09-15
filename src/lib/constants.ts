import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WeekendIcon from '@mui/icons-material/Weekend';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FortIcon from '@mui/icons-material/Fort';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import { ActivityIcon, BreakfastIcon, CheckInIcon, DepartureIcon, LunchIcon } from 'src/Assets/Icons';
import { IApproachStep, IFaq } from './types';
import { TripTypes } from 'src/lib/types';
import { routes } from 'src/routes/routeConstants';

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

export const SideBarItems = [
  {
    id: 0,
    title: 'To/From Selection',
    question: 'From where to where are you traveling?',
    description: 'Set your travel origin and destination.',
    icon: LocationOnIcon,
    inputs: [
      {
        label: 'From',
        name: 'from',
        type: 'text',
      },
      {
        label: 'To',
        name: 'to',
        type: 'text',
      },
    ],
  },
  {
    id: 1,
    title: 'Type of Trip',
    question: 'What kind of experience would you like?',
    description: 'Choose your travel experience type.',
    icon: LocalAirportIcon,
    name: 'tripType',
    options: [
      {
        label: 'Relaxing',
        value: TripTypes.relaxing,
        icon: WeekendIcon,
      },
      {
        label: 'Adventurous',
        value: TripTypes.adventurous,
        icon: SportsHandballIcon,
      },
      {
        label: 'Religious',
        value: TripTypes.religious,
        icon: TempleHinduIcon,
      },
      {
        label: 'Family',
        value: TripTypes.family,
        icon: Diversity3Icon,
      },
      {
        label: 'Cultural',
        value: TripTypes.cultural,
        icon: FortIcon,
      },
      {
        label: 'Night Life',
        value: TripTypes.nightLife,
        icon: NightsStayIcon,
      },
    ],
  },
  {
    id: 2,
    title: 'Traveler Count',
    question: 'How many people are traveling?',
    description: 'Enter the number of travelers.',
    icon: PeopleAltIcon,
    inputs: [
      {
        label: 'No. of Adults',
        name: 'adults',
        type: 'number',
      },
      {
        label: 'No. of Kids',
        name: 'kids',
        type: 'number',
      },
    ],
  },
  {
    id: 3,
    title: 'Days Count',
    question: 'How many days you are planning to travel?',
    description: 'Enter the number of days.',
    icon: CalendarMonthIcon,
    inputs: [
      {
        label: 'Start Date',
        name: 'startDate',
        type: 'date',
      },
      {
        label: 'No. of Days',
        name: 'numberOfDays',
        type: 'number',
      },
    ],
  },
  {
    id: 4,
    title: 'Budget Range',
    question: 'What is your budget range for the trip?',
    description: "Set your trip's budget.",
    icon: CurrencyRupeeIcon,
    range: {
      min: 0,
      max: 1000000,
      step: 1000,
    },
  },
  {
    id: 5,
    title: 'Mode of Transport',
    question: 'How do you plan to travel?',
    description: 'Select your preferred travel method.',
    icon: DirectionsCarIcon,
    name: 'preferredTravelMode',
    options: [
      {
        label: 'Train',
        value: 'train',
        icon: TrainIcon,
      },
      {
        label: 'Bus',
        value: 'bus',
        icon: DirectionsBusIcon,
      },
      {
        label: 'Flight',
        value: 'flight',
        icon: FlightIcon,
      },
      {
        label: 'Personal Vehicle',
        value: 'personal_vehicle',
        icon: DirectionsCarIcon,
      },
    ],
  },
];

export const itinerarySteps: IApproachStep[] = [
  {
    stepNo: 1,
    title: 'Location & Travel Party Size',
    description:
      'Identify and choose destinations based on user preferences and gather information on the number of travelers.',
  },
  {
    stepNo: 2,
    title: 'Types of Trip',
    description: 'Determine the nature of the trip—relaxing, adventurous, etc.',
  },
  {
    stepNo: 3,
    title: 'Duration',
    description: 'Specify the number of days for the itinerary.',
  },
  {
    stepNo: 4,
    title: 'Budget Range & Mode of Transport',
    description: "Request the user's budget range and determine preferred modes of transportation.",
  },
  {
    stepNo: 5,
    title: 'Duration',
    description: 'Specify the number of days for the itinerary.',
  },
];

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

export const navRoutes = [
  { id: 1, path: routes.EXPLORE, label: 'Explore' },
  { id: 2, path: routes.SUPPORT, label: 'Support' },
];
