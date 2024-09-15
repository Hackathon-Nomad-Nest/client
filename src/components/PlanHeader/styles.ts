import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: sticky;
  top: 0px;
  min-height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  z-index: 2;
  border-bottom: 5px solid ${(props) => props.theme.primaryColor.peach};
  flex-wrap: wrap;
  gap: 16px;
`;

export const StyledNote = styled.div<{ $color: string }>`
  font-style: italic;
  color: ${({ $color }) => $color};
  font-size: 14px;
  padding-bottom: 5px;
`;

export const StyledBudget = styled.div`
  display: flex;
  gap: 32px;
  padding-left: 5px;
  align-items: center;
`;

export const StyledAmount = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primaryColor.peach};
`;

export const StyledDate = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
