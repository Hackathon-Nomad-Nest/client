import { css_flex_col } from 'src/styles/globalStyles';
import styled from 'styled-components';

const Container = styled.div`
  ${css_flex_col()}
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  color: white;
  background-color: #020449;
  padding: 7vh;
`;

const Wrapper = styled.div`
  ${css_flex_col()}
  align-items: flex-start;
  gap: 40px;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Heading = styled.h1`
  font-weight: bold;
`;

const SubHeading = styled.p`
  color: #898abd9e;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 70vw;
  border-top: 1px solid #898abd9e;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 250px;
  height: 100vh;
  padding-top: 20px;
  padding-right: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.1);
`;

const Content = styled.div`
  flex: 1;
  padding: 30px;
  color: white;
`;

const SidebarItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  color: ${({ active }) => (active ? '#10d876' : 'rgba(255, 255, 255, 0.6)')};
  cursor: pointer;
`;

const SidebarIcon = styled.div<{ active?: boolean }>`
  ${css_flex_col()}
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#10d876' : 'rgba(255, 255, 255, 0.3)')};
  margin-right: 10px;
`;

const StepHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StepSubHeader = styled.p`
  color: #898abd9e;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-height: 50vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
`;

const Option = styled.div<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? 'rgba(16, 216, 118, 0.2)' : 'rgba(255, 255, 255, 0.1)')};
  border: ${({ selected }) => (selected ? '2px solid #10d876' : '2px solid transparent')};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const OptionText = styled.div`
  margin-left: 10px;
`;

const RangeLabel = styled.label`
  font-size: 1.2rem;
  margin-bottom: 8px;
  display: block;
`;

const DualRangeWrapper = styled.div`
  position: relative;
  height: 50px;
  margin-top: 20px;
`;

const Track = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: #e4e4e4;
  top: 16px;
`;

const RangeFill = styled.div<{ left: number; right: number }>`
  position: absolute;
  height: 8px;
  border-radius: 4px;
  background-color: #10d876;
  top: 16px;
  left: ${({ left }) => left}%;
  right: ${({ right }) => right}%;
`;

const Thumb = styled.input.attrs({ type: 'range' })`
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  width: 100%;
  height: 0;
  background: none;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: auto;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #10d876;
    cursor: pointer;
    position: relative;
    top: 20px;
  }

  &::-moz-range-thumb {
    pointer-events: auto;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid #10d876;
    cursor: pointer;
    position: relative;
    top: 20px;
  }
`;

const RangeValue = styled.p`
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  background-color: ${({ primary }) => (primary ? '#10d876' : 'transparent')};
  color: ${({ primary }) => (primary ? '#111842' : 'rgba(255, 255, 255, 0.6)')};
  border: 2px solid ${({ primary }) => (primary ? '#10d876' : 'rgba(255, 255, 255, 0.6)')};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export {
  Container,
  DualRangeWrapper,
  Wrapper,
  HeadingWrapper,
  Heading,
  SubHeading,
  FormWrapper,
  Sidebar,
  Content,
  SidebarItem,
  SidebarIcon,
  StepHeader,
  StepSubHeader,
  Label,
  Input,
  OptionContainer,
  Option,
  OptionText,
  RangeFill,
  RangeLabel,
  RangeValue,
  Thumb,
  Track,
  ButtonGroup,
  Button,
};
