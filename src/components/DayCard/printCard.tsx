import { IDayPlan } from 'src/model/trip';
import 'react-vertical-timeline-component/style.min.css';
import { cleanString } from 'src/lib/helper';
import { StyledAmount } from '../PlanHeader/styles';
import { StyledCardContainer, StyledDescription, StyledHeading, StyledInfoContainer, StyledPrice } from './styles';

const PrintDayCard = (props: IDayPlan) => {
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

  return (
    <>
      <div>
        {Object.entries(props).map(([key, value], fieldIndex) => {
          return (
            <div key={key + fieldIndex} style={{ margin: '32px' }}>
              <StyledCardContainer>
                <StyledInfoContainer>
                  <StyledHeading>{cleanString(key)} </StyledHeading>
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
                </StyledInfoContainer>
              </StyledCardContainer>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PrintDayCard;
