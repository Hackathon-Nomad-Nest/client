import { Breakpoints } from 'src/styles/breakpoints';
import { css_button } from 'src/styles/globalStyles';
import styled from 'styled-components';

export const StyledContainer = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 430px;
  min-height: 22%;
  padding: 40px;
  background-color: white;
  border-radius: 16px;
  &:focus {
    outline: none;
  }
  ${Breakpoints.MOBILE} {
    height: 50%;
    width: 80%;
    margin: 20px;
    padding: 30px 20px;
    transform: translate(-55%, -50%);
  }
`;

export const StyledContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledHeading = styled.div`
  font-size: 24px;
  font-weight: 400;
  ${Breakpoints.MOBILE} {
    font-size: 20px;
  }
`;

export const StyledMessage = styled.div`
  color: var(--Brand-Palette-Gray-500, #6b7280);
  font-size: 15px;
  font-weight: 600;
  line-height: 130%;
  ${Breakpoints.MOBILE} {
    font-size: 13px;
  }
`;

export const StyledContainerBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

export const StyledButton = styled.button`
  ${css_button}
  background-color: ${(props) => props.theme.primaryColor.peach};
  padding: 12px 16px;
  border-radius: 8px;
  margin: 16px;
  font-size: 18px;
`;

export const StyledCancelButton = styled(StyledButton)`
  background-color: white;
  border: 1px solid ${(props) => props.theme.primaryColor.peach};
  margin: 16px;
`;
