import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {
  StyledChecklist,
  StyledChecklistItem,
  StyledContainer,
  StyledHeader,
  StyledIconWrapper,
  StyledLabel,
  StyledMainContent,
  StyledSection,
  StyledSectionTitle,
  StyledTitle,
} from './styles';
import { cleanString } from 'src/lib/helper';

const essentials_to_carry = {
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
};

const ChecklistComponent: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>Essentials to Carry</StyledTitle>
      </StyledHeader>
      <StyledMainContent>
        {Object.entries(essentials_to_carry).map(([category, items]) => (
          <StyledSection key={category}>
            <StyledSectionTitle>{cleanString(category)}</StyledSectionTitle>
            <StyledChecklist>
              {items.map((item, index) => (
                <StyledChecklistItem key={index}>
                  <StyledIconWrapper>
                    <AcUnitIcon />
                  </StyledIconWrapper>
                  <StyledLabel>{item}</StyledLabel>
                </StyledChecklistItem>
              ))}
            </StyledChecklist>
          </StyledSection>
        ))}
      </StyledMainContent>
    </StyledContainer>
  );
};

export default ChecklistComponent;
