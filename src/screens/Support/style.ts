import styled from "styled-components";
import Box from "src/sharedComponents/Box";
import { css_hide_scrollbars } from "src/styles/globalStyles";
import SupportImage from 'src/assets/Backgrounds/support-page.jpg';

export const BoxWithHiddenScrollbar = styled(Box)`
  ${css_hide_scrollbars()}
  gap: 1rem;
  max-height: calc(100vh - 300px);
`;

export const BoxWithBackground = styled(Box)`
  background-image: url(${SupportImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
`;
