import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: ${(props) => props.theme.primaryColor.apricot};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.primaryColor.peach};
  font-size: 2em;
  margin: 0;
`;

export const StyledMainContent = styled.main`
  padding: 10px;
`;

export const StyledSection = styled.section`
  margin-bottom: 20px;
`;

export const StyledSectionTitle = styled.h2`
  font-size: 1.5em;
  color: ${(props) => props.theme.primaryColor.tealBlue};
  margin-bottom: 10px;
`;

export const StyledChecklist = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledChecklistItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.primaryColor.peach};

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.1em;
  color: ${(props) => props.theme.primaryColor.tealBlue};
`;

export const StyledIconWrapper = styled.span`
  margin-right: 10px;
  color: ${(props) => props.theme.primaryColor.turquoiseGreen};
`;
