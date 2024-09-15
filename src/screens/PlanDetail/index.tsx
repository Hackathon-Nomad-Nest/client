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
import DayCard, { IImageProps } from 'src/components/DayCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import { addPlanById, removePlanById, getPlanById } from 'src/api/plan';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledButton } from 'src/components/ConfirmModal/styles';
import { routes } from 'src/routes/routeConstants';
import { PLAN_DESCRIPTION } from 'src/lib/constants';
import { getImageUrl } from 'src/api/imageUrl';
import { ITrip } from 'src/model/trip';
import { cleanString } from 'src/lib/helper';

const PlanDetail = () => {
  const [planDetail, setPlanDetails] = useState<ITrip>();
  const [imageUrl, setImageUrl] = useState<Record<string, IImageProps[]>>();
  const { planId } = useParams();
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const generateKeyArray = useCallback(() => {
    const keyArray = [planDetail!.trip_details?.destination, 'lunch', 'dinner', 'departure', 'check_in'];
    Object.values(planDetail!.travel_plan)?.forEach((value: any) => {
      if (value?.morning_activity) {
        keyArray.push(value?.morning_activity?.activity);
      } else if (value?.afternoon_activity) {
        keyArray.push(value?.afternoon_activity?.activity);
      } else if (value?.evening_activity) {
        keyArray.push(value?.evening_activity?.activity);
      }
    });
    return keyArray;
  }, [planDetail]);

  const fetchPlanDetails = useCallback(async (id: string) => {
    try {
      const planResponse = await getPlanById(id);
      if (planResponse?.response) {
        setPlanDetails(planResponse.response);
      }
    } catch (error) {
      console.error('Failed to fetch plan details', error);
    }
  }, []);

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

  const handleDeletePlan = useCallback(
    async (dayName: string, key: string) => {
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
        const data = { day: dayName, keyName: key, newValue: value };
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
    if (planId) {
      fetchPlanDetails(planId);
    }
  }, [planId]);

  useEffect(() => {
    if (planDetail) {
      fetchImageUrl();
    }
  }, [planDetail, fetchImageUrl]);

  const generatePDF = () => {
    if (planId) {
      navigate(routes?.PRINT_PLAN_DETAIL.replace(':planId', planId));
    }
  };

  const editPlan = () => {
    navigate(`/itinerary-details-form/${planId}`)
  }

  return (
    <StyledContainer ref={divRef}>
      <StyledMainBanner $imageUrl={planDetail && imageUrl?.[planDetail?.trip_details?.destination]?.[0]?.url}>
        <StyledInfoBox>
          <StyledMainHeading>
            Trip from {planDetail?.trip_details?.origin} to {planDetail?.trip_details?.destination}
          </StyledMainHeading>
          <StyledText>{PLAN_DESCRIPTION}</StyledText>
          <StyledButton onClick={generatePDF}>Download PDF</StyledButton>
          <StyledButton onClick={editPlan}>Edit yout Plan</StyledButton>
        </StyledInfoBox>
      </StyledMainBanner>
      {!!planDetail && (
        <>
          <PlanHeader
            start_date={planDetail?.trip_details?.start_date}
            end_date={planDetail?.trip_details?.end_date}
            expected_budget={planDetail?.trip_details?.budget}
            total_budget={planDetail?.cost_summary?.total_trip_cost}
          />
          <StyledDaysContainer>
            {Object.entries(planDetail?.travel_plan)?.map(([key, value], index: number) => (
              <Accordion heading={cleanString(key)} key={'day-' + index} isDefaultOpen={index === 0}>
                <DayCard
                  {...(value as any)}
                  handlePlanDelete={handleDeletePlan}
                  dayName={key}
                  handleAddPlan={handleAddPlan}
                  imageUrl={imageUrl}
                />
              </Accordion>
            ))}
          </StyledDaysContainer>
        </>
      )}
    </StyledContainer>
  );
};

export default PlanDetail;
