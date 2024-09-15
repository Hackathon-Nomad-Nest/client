/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import { PlanHeader } from 'src/components/PlanHeader';
import {
  StyledContainer,
  StyledDaysContainer,
  StyledInfoBox,
  StyledMainBanner,
  StyledMainHeading,
  StyledText,
} from './styles';
import Accordion from 'src/components/Accordion';
import DayCard from 'src/components/DayCard';
import { useCallback, useEffect, useState } from 'react';
import { addPlanById, removePlanById, getPlanById } from 'src/api/plan';
import { useParams } from 'react-router-dom';

const dummyData1 = {
  trip_details: {
    start_date: '2024-09-13',
    end_date: '2024-09-17',
    origin: 'Delhi',
    destination: 'Kerala',
    budget: 10000,
    adults: 2,
    expected_budget_range: {
      from: 0,
      to: 10000000,
    },
  },
  travel_plan: {
    day_1: {
      departure: {
        mode: 'train',
        station: 'New Delhi Railway Station',
        location_latitude: '28.6433',
        location_longitude: '77.2195',
        time: '07:00 PM',
        train_name: 'Kerala Express',
        arrival_station: 'Ernakulam Junction',
        arrival_time: '08:25 AM (Day 3)',
        price: '2000',
        class: 'Sleeper',
        description: 'Overnight journey to Kerala.',
      },
    },
    day_3: {
      check_in: {
        hotel: 'Gokulam Park Hotel',
        location_latitude: '9.9948',
        location_longitude: '76.3046',
        price_per_night: '1500',
        total_cost: 3000,
        location: 'Ernakulam, Kochi',
        description: 'Comfortable stay in the heart of Kochi.',
      },
      breakfast: {
        restaurant: 'Hotel Saravana Bhavan',
        location_latitude: '9.9645',
        location_longitude: '76.2802',
        price: '300',
        famous_dishes: ['Idli', 'Dosa'],
        description: 'Popular spot for a traditional South Indian breakfast.',
      },
      morning_activity: {
        activity: 'Visit Fort Kochi',
        location_latitude: '9.9664',
        location_longitude: '76.2425',
        entry_fee: 'Free',
        description: 'Walk through historical streets, visit Chinese fishing nets and local cafes.',
      },
      lunch: {
        restaurant: 'Ginger House Restaurant',
        location_latitude: '9.9658',
        location_longitude: '76.2415',
        price: '500',
        famous_dishes: ['Kerala Fish Curry', 'Appam'],
        description: 'Unique dining experience with waterfront views.',
      },
      afternoon_activity: {
        activity: 'Explore Jew Town and Paradesi Synagogue',
        location_latitude: '9.9639',
        location_longitude: '76.2402',
        entry_fee: 100,
        description: 'Discover the cultural heritage and antique shops in Jew Town.',
      },
      evening_activity: {
        activity: 'Kathakali Performance',
        location_latitude: '9.9689',
        location_longitude: '76.2416',
        entry_fee: 300,
        description: 'Experience the traditional dance drama of Kerala.',
      },
      dinner: {
        restaurant: 'Fusion Bay',
        location_latitude: '9.9667',
        location_longitude: '76.2422',
        price: '500',
        famous_dishes: ['Seafood Platter', 'Kerala Parotta'],
        description: 'A restaurant known for its fusion of traditional and modern cuisines.',
      },
    },
    day_4: {
      breakfast: {
        restaurant: 'Dal Roti',
        location_latitude: '9.9665',
        location_longitude: '76.2418',
        price: '300',
        famous_dishes: ['Parathas', 'Curry'],
        description: 'A quaint spot for a hearty breakfast.',
      },
      morning_activity: {
        activity: 'Visit Mattancherry Palace',
        location_latitude: '9.9626',
        location_longitude: '76.2410',
        entry_fee: 50,
        description: 'Historical palace with beautiful murals and artifacts.',
      },
      lunch: {
        restaurant: "Mary's Kitchen",
        location_latitude: '9.9662',
        location_longitude: '76.2418',
        price: '500',
        famous_dishes: ['Thali', 'Chicken Curry'],
        description: 'A homely restaurant offering authentic Kerala thalis.',
      },
      afternoon_activity: {
        activity: 'Backwater Tour in Alleppey',
        location_latitude: '9.4981',
        location_longitude: '76.3388',
        price: '1000',
        description: 'Enjoy a serene houseboat ride through the famous Kerala backwaters.',
      },
      evening_activity: {
        activity: 'Stroll on Marine Drive',
        location_latitude: '9.9662',
        location_longitude: '76.2764',
        description: 'Enjoy a peaceful walk along the waterfront in Kochi.',
        price: 'Free',
      },
      dinner: {
        restaurant: 'The Rice Boat',
        location_latitude: '9.9663',
        location_longitude: '76.2673',
        price: '700',
        famous_dishes: ['Fish Molly', 'Karimeen Pollichathu'],
        description: 'Dine on a boat with a menu featuring fresh seafood.',
      },
    },
    day_5: {
      'check-out': {
        hotel: 'Gokulam Park Hotel',
        location_latitude: '9.9948',
        location_longitude: '76.3046',
        checkout_time: '12:00 PM',
        description: 'Check-out from the hotel.',
      },
      departure: {
        mode: 'train',
        station: 'Ernakulam Junction',
        location_latitude: '9.9816',
        location_longitude: '76.2865',
        time: '05:00 PM',
        train_name: 'Kerala Express',
        arrival_station: 'New Delhi Railway Station',
        arrival_time: '09:00 AM (Day 7)',
        price: '2000',
        class: 'Sleeper',
        description: 'Return journey to Delhi.',
      },
    },
  },
  essentials_to_carry: {
    general: [
      'Valid ID proofs',
      'Train tickets',
      'Hotel booking confirmation',
      'Cash and cards',
      'Mobile phone and charger',
      'Camera and charger',
      'Light backpack',
    ],
    clothing: ['Light cotton clothes', 'Comfortable walking shoes', 'Umbrella or raincoat (for unexpected showers)'],
    toiletries: ['Toothbrush and toothpaste', 'Hand sanitizer', 'Face wash', 'Sunscreen', 'Lip balm'],
    medication: ['Personal medications', 'First aid kit'],
  },
  weather_info: {
    average_temperature: {
      high: '31°C',
      low: '24°C',
    },
    precipitation: 'High chance of rain',
  },
  cost_summary: {
    total_food_cost: 2600,
    total_stay_cost: 3000,
    total_transportation_cost: 8000,
    total_activity_cost: 1400,
    total_entry_fee: 450,
    total_trip_cost: 15450,
    description: {
      total_food_cost: 'Total cost for all meals during the trip.',
      total_stay_cost: 'Total cost for 2 nights at the hotel.',
      total_transportation_cost: 'Cost for train fares.',
      total_activity_cost: 'Cost for activities like Kathakali performance and backwater tour.',
      total_entry_fee: 'Fees for entry to places like Paradesi Synagogue and Mattancherry Palace.',
      total_trip_cost: 'Overall cost for the trip including food, stay, transportation, and activities.',
    },
  },
};

const PlanDetail = () => {
  const [planDetail, setPlanDetails] = useState<any>(dummyData1);
  const { planId } = useParams();
  // const planId = '66e58122060bda927f0f4ac8';

  const fetchPlanDetails = useCallback(async (id: string) => {
    try {
      const planResponse = await getPlanById(id);
      console.log('plan response----------------->', planResponse);
      if (planResponse?.response) {
        setPlanDetails(planResponse.response);
      }
    } catch (error) {
      console.error('Failed to fetch plan details', error);
    }
  }, []);

  const handleDeletePlan = useCallback(
    async (dayName: string, key: string) => {
      console.log('delete----------->', dayName, key);
      try {
        const data = { day: dayName, keyName: key };
        const deleteResponse = planId && (await removePlanById(planId, data));
        if (deleteResponse?.response) {
          setPlanDetails(deleteResponse?.response);
        }
      } catch (error) {
        console.error('Failed to add plan', error);
      }
    },
    [planId]
  );

  const handleAddPlan = useCallback(
    async (dayName: string, key: string, value: string) => {
      try {
        const data = { day: dayName, keyName: key, value };
        const addResponse = planId && (await addPlanById(planId, data));
        if (addResponse?.response) {
          setPlanDetails(addResponse?.response);
        }
      } catch (error) {
        console.error('Failed to add plan', error);
      }
    },
    [planId]
  );

  useEffect(() => {
    console.log('plan id--------------->', planId);
    if (planId) {
      fetchPlanDetails(planId);
    }
  }, [planId]);

  return (
    <StyledContainer>
      <StyledMainBanner>
        <StyledInfoBox>
          <StyledMainHeading>
            Trip from {planDetail?.trip_details?.origin} to {planDetail?.trip_details?.destination}
          </StyledMainHeading>
          <StyledText>{planDetail?.trip_details?.description}</StyledText>
          <StyledText>Adults: {planDetail?.trip_details?.adults}</StyledText>
        </StyledInfoBox>
      </StyledMainBanner>
      <PlanHeader
        start_date={planDetail?.trip_details?.start_date}
        end_date={planDetail?.trip_details?.end_date}
        budget={planDetail?.trip_details?.budget}
        expected_budget_range={planDetail?.trip_details?.expected_budget_range}
      />
      <StyledDaysContainer>
        {Object.entries(planDetail?.travel_plan)?.map(([key, value], index: number) => (
          <Accordion heading={'Day ' + (index + 1)} key={'day-' + index} isDefaultOpen={index === 0}>
            <DayCard
              {...(value as any)}
              handlePlanDelete={handleDeletePlan}
              dayName={key}
              handleAddPlan={handleAddPlan}
            />
          </Accordion>
        ))}
      </StyledDaysContainer>
    </StyledContainer>
  );
};

export default PlanDetail;
