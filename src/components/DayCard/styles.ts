import { css_button } from 'src/styles/globalStyles';
import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInfoContainer = styled.div`
  padding: 16px 0px;
  flex: 1;
  position: relative;
`;

export const StyledImageContainer = styled.img`
  width: 100%;
  min-height: 250px;
  max-height: 400px;
  height: auto;
  border-radius: 8px;
`;

export const StyledDescription = styled.p`
  font-style: italic;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledHeading = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 600;
  font-size: 24px;
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0px;
`;

export const StyledButton = styled.button`
  ${css_button}
  background-color: ${(props) => props.theme.primaryColor.peach};
  padding: 8px 16px;
  border-radius: 8px;
  margin-top: 16px;
`;
