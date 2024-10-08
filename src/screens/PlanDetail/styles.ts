import { DUMMY_PLAN_IMAGE } from 'src/lib/constants';
import { css_flex_col } from 'src/styles/globalStyles';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  ${css_flex_col}
`;

export const StyledMainBanner = styled.div<{ $imageUrl?: string }>`
  min-height: 80vh;
  width: 100%;
  background-image: url(${({ $imageUrl }) => ($imageUrl ? $imageUrl : DUMMY_PLAN_IMAGE)});
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

export const StyledInfoBox = styled.div`
  max-width: 600px;
  min-height: 70vh;
  margin: 1%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

export const StyledMainHeading = styled.h1`
  font-size: 60px;
`;

export const StyledText = styled.p``;

export const StyledDaysContainer = styled.div`
  margin: 32px 5%;
  max-width: 1200px;
  align-self: center;
  width: 100%;
`;
