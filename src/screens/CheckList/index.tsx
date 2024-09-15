// src/components/Checklist.tsx

import React from 'react';
import theme from 'src/styles/theme';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: ${theme.primaryColor.apricot};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${theme.primaryColor.peach};
  font-size: 2em;
  margin: 0;
`;

const MainContent = styled.main`
  padding: 10px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  color: ${theme.primaryColor.tealBlue};
  margin-bottom: 10px;
`;

const Checklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ChecklistItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${theme.primaryColor.peach};

  &:last-child {
    border-bottom: none;
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: ${theme.primaryColor.turquoiseGreen};
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 1.1em;
  color: ${theme.primaryColor.tealBlue};
`;

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

// Checklist Component
const ChecklistComponent: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Essentials to Carry</Title>
      </Header>
      <MainContent>
        {Object.entries(essentials_to_carry).map(([category, items]) => (
          <Section key={category}>
            <SectionTitle>{capitalizeFirstLetter(category)}</SectionTitle>
            <Checklist>
              {(items as string[])?.map((item, index) => (
                <ChecklistItem key={index}>
                  <Checkbox id={`${category}-${index}`} />
                  <Label htmlFor={`${category}-${index}`}>{item}</Label>
                </ChecklistItem>
              ))}
            </Checklist>
          </Section>
        ))}
      </MainContent>
    </Container>
  );
};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default ChecklistComponent;
