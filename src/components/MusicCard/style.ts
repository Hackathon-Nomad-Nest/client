import Box from 'src/sharedComponents/Box';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.16);
  margin: 10px;
  border-radius: 10px;
  padding: 20px; /* optional, can adjust based on your need */
`;

export default StyledBox;
