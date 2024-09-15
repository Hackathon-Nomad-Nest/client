import { styled } from 'styled-components';

export const StyledAccordionContainer = styled.div<{ $hideBorder?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  ${({ $hideBorder, theme }) => !$hideBorder && `border-bottom: 1px solid ${theme.primaryColor.peach};`}
`;

export const StyledHeading = styled.div<{ $textColor?: string }>`
  font-weight: 700;
  color: ${({ theme, $textColor }) => ($textColor ? $textColor : theme.primaryColor.tealBlue)};
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
`;

export const StyledFlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledChildrenContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;
