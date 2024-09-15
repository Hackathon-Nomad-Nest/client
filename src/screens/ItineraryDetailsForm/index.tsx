import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ItineraryDetailsFormValues, TravelMode, TripTypes } from 'src/lib/types';
import {
  Button,
  ButtonGroup,
  Container,
  Content,
  DualRangeWrapper,
  FormWrapper,
  Heading,
  HeadingWrapper,
  Input,
  Label,
  Option,
  OptionContainer,
  OptionText,
  RangeFill,
  RangeValue,
  Sidebar,
  SidebarIcon,
  SidebarItem,
  StepHeader,
  StepSubHeader,
  SubHeading,
  Thumb,
  Track,
  Wrapper,
} from './styles';
import { SideBarItems } from 'src/lib/constants';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/redux';
import { createItineraryPlan, getItineraryPlan } from 'src/redux/Slices/itineraryPlanSlice';
import { getUserDetails } from 'src/redux/Slices/userSlice';
import Loader from 'src/components/Loader';
import { useNavigate } from 'react-router-dom';

const ItineraryDetailsForm: React.FC = () => {
  const minLimit = 0;
  const maxLimit = 1000000;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [minBudget, setMinBudget] = useState<number>(minLimit); // Min budget value
  const [maxBudget, setMaxBudget] = useState<number>(maxLimit); // Max budget value
  const { watch, setValue, register, handleSubmit } = useForm<ItineraryDetailsFormValues>({
    defaultValues: {
      from: '',
      to: '',
      startDate: new Date(),
      tripType: TripTypes.relaxing,
      adults: 1,
      kids: 0,
      budget: '0-1000000',
      numberOfDays: 2,
      preferredTravelMode: TravelMode.flight,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data: user } = useSelector(getUserDetails);
  const { isLoading: isItineraryPlanLoading, error } = useSelector(getItineraryPlan);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>, step: number) => {
    const value = Math.min(Number(e.target.value), maxBudget - step); // Ensure min < max
    setMinBudget(value);
    setValue('budget', `${value}-${maxBudget}`);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>, step: number) => {
    const value = Math.max(Number(e.target.value), minBudget + step); // Ensure max > min
    setMaxBudget(value);
    setValue('budget', `${minBudget}-${value}`);
  };

  const tripType = watch('tripType');
  const preferredTravelMode = watch('preferredTravelMode');
  const budget = watch('budget');

  const onSubmit: SubmitHandler<ItineraryDetailsFormValues> = async (data) => {
    if (user?.id) {
      const result = await dispatch(createItineraryPlan({ formData: data, userId: user.id }));
      if (result.payload && typeof result.payload !== 'string') {
        navigate(`/plan-detail/${result.payload.id}`);
      }
    }
  };

  if (isItineraryPlanLoading) {
    return <Loader text='Generating Your Plan...' />;
  }

  return (
    <Container>
      <Wrapper>
        <HeadingWrapper>
          <Heading>Plan Your Trip</Heading>
          <SubHeading>Add details for more personalized experience</SubHeading>
        </HeadingWrapper>
        <FormWrapper>
          <Sidebar>
            {SideBarItems.map((sideBarItem) => {
              const Icon = sideBarItem.icon;
              const isActive = sideBarItem.id === activeStep;
              return (
                <SidebarItem key={sideBarItem.id} active={sideBarItem.id === activeStep}>
                  {sideBarItem.title}
                  <SidebarIcon active={isActive}>
                    <Icon sx={{ color: 'white' }} />
                  </SidebarIcon>
                </SidebarItem>
              );
            })}
          </Sidebar>
          <Content>
            {SideBarItems.map((sideBarItem) => {
              if (sideBarItem.id !== activeStep) {
                return null;
              }

              return (
                <div key={sideBarItem.id}>
                  <StepHeader>{sideBarItem.question}</StepHeader>
                  <StepSubHeader>{sideBarItem.description}</StepSubHeader>
                  {sideBarItem.inputs?.map((input) => {
                    return (
                      <div key={input.name}>
                        <Label>{input.label}</Label>
                        <Input
                          type={input.type}
                          {...register(input.name as 'to' | 'from' | 'adults' | 'kids' | 'startDate' | 'numberOfDays')}
                        />
                      </div>
                    );
                  })}
                  {sideBarItem.options && (
                    <OptionContainer>
                      {sideBarItem.options.map((option) => {
                        const Icon = option.icon;

                        return (
                          <Option
                            key={option.value}
                            selected={option.value === tripType || option.value === preferredTravelMode}
                            onClick={() =>
                              setValue(
                                sideBarItem.name as 'tripType' | 'preferredTravelMode',
                                option.value as TripTypes | TravelMode
                              )
                            }
                          >
                            <SidebarIcon>
                              <Icon sx={{ color: 'white' }} />
                            </SidebarIcon>
                            <OptionText>{option.label}</OptionText>
                          </Option>
                        );
                      })}
                    </OptionContainer>
                  )}
                  {sideBarItem.range && (
                    <>
                      <Label>Budget Range</Label>
                      <DualRangeWrapper>
                        <Track />
                        <RangeFill
                          left={((minBudget - minLimit) / (maxLimit - minLimit)) * 100}
                          right={100 - ((maxBudget - minLimit) / (maxLimit - minLimit)) * 100}
                        />
                        <Thumb
                          min={minLimit}
                          max={maxLimit}
                          step={sideBarItem.range.step}
                          value={minBudget}
                          onChange={(e) => handleMinChange(e, sideBarItem.range.step)}
                          style={{ zIndex: 3 }}
                        />
                        <Thumb
                          min={minLimit}
                          max={maxLimit}
                          step={sideBarItem.range.step}
                          value={maxBudget}
                          onChange={(e) => handleMaxChange(e, sideBarItem.range.step)}
                          style={{ zIndex: minBudget === 0 ? 3 : 2 }}
                        />
                      </DualRangeWrapper>
                      <RangeValue>Selected Budget: {budget}</RangeValue>
                    </>
                  )}
                </div>
              );
            })}
            <ButtonGroup>
              {activeStep > 0 ? <Button onClick={() => setActiveStep((prev) => prev - 1)}>Back</Button> : <div />}
              {activeStep < SideBarItems.length - 1 ? (
                <Button primary onClick={() => setActiveStep((prev) => prev + 1)}>
                  Next
                </Button>
              ) : (
                <Button primary onClick={handleSubmit(onSubmit)}>
                  {error ? 'Regenerate' : 'Submit'}
                </Button>
              )}
            </ButtonGroup>
          </Content>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
};

export default ItineraryDetailsForm;
