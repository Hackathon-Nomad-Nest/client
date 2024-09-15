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
import { useCallback, useEffect, useRef, useState } from 'react';
import { getPlanById } from 'src/api/plan';
import { useNavigate, useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import PrintDayCard from 'src/components/DayCard/printCard';
import { IDayPlan, ITrip } from 'src/model/trip';
import { PLAN_DESCRIPTION } from 'src/lib/constants';

const PlanDetail = () => {
  const [planDetail, setPlanDetails] = useState<ITrip>();
  const { planId } = useParams();
  const divRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (planId) {
      fetchPlanDetails(planId);
    }
  }, [planId]);

  const generatePDF = useCallback(() => {
    const options = {
      margin: 5,
      filename: `${planDetail?.trip_details?.origin} to ${planDetail?.trip_details?.destination}.pdf`,
    };

    setTimeout(() => {
      html2pdf()
        .from(divRef.current)
        .set(options)
        .save()
        .then(() => navigate(-1));
    }, 500);
  }, [planDetail]);

  useEffect(() => {
    if (planDetail) {
      generatePDF();
    }
  }, [planDetail, generatePDF]);

  return (
    <StyledContainer ref={divRef}>
      <StyledMainBanner>
        <StyledInfoBox>
          <StyledMainHeading>
            Trip from {planDetail?.trip_details?.origin} to {planDetail?.trip_details?.destination}
          </StyledMainHeading>
          <StyledText>{PLAN_DESCRIPTION}</StyledText>
          <StyledText>Adults: {planDetail?.trip_details?.adults}</StyledText>
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
            {Object.values(planDetail?.travel_plan)?.map((day: IDayPlan, index: number) => (
              <Accordion heading={'Day ' + (index + 1)} key={'day-' + index} isDefaultOpen={true}>
                <PrintDayCard {...day} />
              </Accordion>
            ))}
          </StyledDaysContainer>
        </>
      )}
    </StyledContainer>
  );
};

export default PlanDetail;
