import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  // border: 1px solid gray;
  width: fit-content;
`;

export const StyledImage = styled.div`
  aspect-ratio: 1/1;
  height: 600px;
  width: 600px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: background-size 1s ease-in-out 1s;

  &:hover {
    background-size: 110%; /* Zoom the background image */
  }
  background-image: url('https://images.pexels.com/photos/16738839/pexels-photo-16738839/free-photo-of-a-man-riding-on-an-elephant-in-front-of-the-amber-fort-in-amer-rajasthan-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const StyledInfoContainer = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 10px;
  max-width: 600px;
  margin: 15px;
  background-color: ${(props) => props.theme.primaryColor.tealBlue};
  opacity: 0.8;
  color: white;
`;
