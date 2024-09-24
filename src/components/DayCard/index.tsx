import { IDayPlan } from 'src/model/trip';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { cleanString } from 'src/lib/helper';
import { DUMMY_ACTIVITY_IMAGE, getIconComponent } from 'src/lib/constants';
import { StyledAmount } from '../PlanHeader/styles';
import {
  StyledButton,
  StyledCardContainer,
  StyledDescription,
  StyledHeading,
  StyledImageContainer,
  StyledInfoContainer,
  StyledPrice,
  elementStyle,
} from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmModal from '../ConfirmModal';
import { useState } from 'react';
import { AddCircleOutline } from '@mui/icons-material';
import AddModal from '../AddModal';
import { StyledText } from 'src/screens/PlanDetail/styles';

export interface IImageProps {
  url: string;
  alt: string;
}

interface IDayCardProps extends IDayPlan {
  handlePlanDelete: (dayName: string, key: string) => void;
  handleAddPlan: (dayName: string, key: string, value: string) => void;
  imageUrl: Record<string, IImageProps[]>;
  dayName: string;
}

const DayCard = ({ handlePlanDelete, handleAddPlan, imageUrl, dayName, ...restProps }: IDayCardProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteActivityKey, setDeleteActivityKey] = useState('');
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
    setDeleteActivityKey('');
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  return (
    <>
      <VerticalTimeline>
        {Object.entries(restProps)?.map(([key, value], fieldIndex) => {
          const Icon = getIconComponent(key);
          const activityName = typeof value !== 'string' && 'activity' in value ? value['activity'] : key;
          return (
            <VerticalTimelineElement
              {...elementStyle}
              date={value?.time}
              icon={<Icon />}
              key={dayName + key + fieldIndex}
            >
              <StyledCardContainer>
                <StyledInfoContainer>
                  <StyledHeading>
                    {cleanString(key)}
                    <DeleteIcon
                      onClick={() => {
                        setIsDeleteModalOpen(true);
                        setDeleteActivityKey(key);
                      }}
                      sx={{ cursor: 'pointer' }}
                    />
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
                          <StyledAmount>&#8377;{value?.price}</StyledAmount>
                        </StyledPrice>
                      ) : null}
                    </>
                  )}
                </StyledInfoContainer>
              </StyledCardContainer>
              <StyledImageContainer
                src={
                  activityName && imageUrl
                    ? imageUrl[activityName]?.[0]?.url ?? DUMMY_ACTIVITY_IMAGE
                    : DUMMY_ACTIVITY_IMAGE
                }
                alt={key + '-image'}
              />
            </VerticalTimelineElement>
          );
        })}
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          onRequestClose={handleModalClose}
          onSave={() => {
            handlePlanDelete(dayName, deleteActivityKey);
          }}
          title='Are you sure you want to delete this event?'
        />
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
