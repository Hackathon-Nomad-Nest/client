import { ReactElement, ReactNode, useState } from 'react';

import { StyledAccordionContainer, StyledChildrenContainer, StyledFlexBox, StyledHeading } from './style';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const Accordion = ({
  heading,
  children,
  icon,
  hideBorder,
  headingColor,
  isDefaultOpen = false,
}: {
  heading: string;
  children?: ReactElement | ReactElement[] | ReactNode;
  icon?: string;
  hideBorder?: boolean;
  headingColor?: string;
  isDefaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  return (
    <>
      <StyledAccordionContainer $hideBorder={hideBorder} onClick={() => setIsOpen((prev) => !prev)}>
        <StyledFlexBox>
          {icon && <img src={icon} alt='icon' />}
          <StyledHeading $textColor={headingColor}>{heading}</StyledHeading>
        </StyledFlexBox>
        {isOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
      </StyledAccordionContainer>
      <StyledChildrenContainer $isOpen={isOpen}>{children}</StyledChildrenContainer>
    </>
  );
};

export default Accordion;
