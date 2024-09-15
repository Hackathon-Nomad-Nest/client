import { IDayPlan } from 'src/model/trip';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { cleanString } from 'src/lib/helper';
import { getIconComponent } from 'src/lib/constants';
import { StyledAmount } from '../PlanHeader/styles';
import {
  StyledButton,
  StyledCardContainer,
  StyledDescription,
  StyledHeading,
  StyledImageContainer,
  StyledInfoContainer,
  StyledPrice,
} from './styles';
import theme from 'src/styles/theme';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from '../ConfirmModal';
import { useState } from 'react';
import { AddCircleOutline } from '@mui/icons-material';
import AddModal from '../AddModal';
import { StyledText } from 'src/screens/PlanDetail/styles';

interface IDayCardProps extends IDayPlan {
  handlePlanDelete: (dayName: string, key: string) => void;
  handleAddPlan: (dayName: string, key: string, value: string) => void;
  dayName: string;
}

const DayCard = (props: IDayCardProps) => {
  const { handlePlanDelete, handleAddPlan, dayName, ...restProps } = props;
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const renderFields = (key: string, value: string | number, index: number) => {
    const keyString = cleanString(key);
    switch (key) {
      case 'price':
        return null;
      case 'location_latitude':
        return null;
      case 'location_longitude':
        return null;
      case 'description':
        return null;
      default:
        return (
          <div key={key + index}>
            <b>{keyString}:</b> {value}
          </div>
        );
    }
  };

  const handleModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <VerticalTimeline>
        {Object.entries(restProps).map(([key, value], fieldIndex) => {
          const Icon = getIconComponent(key);
          return (
            <VerticalTimelineElement {...elementStyle} date={value?.time} icon={<Icon />} key={key + fieldIndex}>
              <StyledCardContainer>
                <StyledInfoContainer>
                  <StyledHeading>
                    {cleanString(key)}
                    <DeleteIcon onClick={() => setIsDeleteModalOpen(true)} sx={{ cursor: 'pointer' }} />
                  </StyledHeading>
                  {typeof value == 'string' ? (
                    <StyledText>{value}</StyledText>
                  ) : (
                    <>
                      <StyledDescription>{value?.description}</StyledDescription>
                      {Object.entries(value).map(([fieldKey, fieldValue], fieldIndex) =>
                        renderFields(fieldKey, fieldValue as string, fieldIndex)
                      )}
                      {value?.price ? (
                        <StyledPrice>
                          Price:
                          <StyledAmount>${value?.price}</StyledAmount>
                        </StyledPrice>
                      ) : null}
                    </>
                  )}
                </StyledInfoContainer>
              </StyledCardContainer>
              <StyledImageContainer
                src='https://images.pexels.com/photos/1381415/pexels-photo-1381415.jpeg?auto=compress&cs=tinysrgb&w=400'
                alt={key + '-image'}
              />
              <ConfirmModal
                isOpen={isDeleteModalOpen}
                onRequestClose={handleModalClose}
                onSave={() => {
                  handlePlanDelete(dayName, key);
                }}
                title='Are you sure you want to delete this event?'
              />
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement {...elementStyle} icon={<AddCircleOutline />}>
          <div>You can add new Event to {cleanString(dayName)}. Just click on the below button. </div>
          <StyledButton onClick={() => setIsAddModalOpen(true)}>Add Event</StyledButton>
          <AddModal
            isOpen={isAddModalOpen}
            onRequestClose={handleAddModalClose}
            onSave={(eventKey: string, eventValue: string) => handleAddPlan(dayName, eventKey, eventValue)}
            title='Enter the Event that you want to Add'
            message='This may lead to change in budget price'
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default DayCard;

const elementStyle = {
  className: 'vertical-timeline-element--work',
  contentStyle: { background: theme.primaryColor.apricot },
  contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
  iconStyle: { background: theme.primaryColor.apricot, color: '#fff' },
};
