import { PetIcon } from "src/Assets/Icons/PetIcon";
import { StyledContainer, StyledImage, StyledInfoContainer } from "./styles";

interface IPlanCardProps {
  id?: string;
  start_date: string;
  end_date: string;
  origin?: string;
  destination: string;
  budget: number;
  adults: number;
  kids?: number;
  pets?: boolean;
  description: string;
}

const PlanCard = ({ destination, budget, adults=0, kids, pets=false, start_date, end_date, description }: IPlanCardProps) => {
  return <StyledContainer>
    <StyledImage>
    <StyledInfoContainer>
       <h1>{destination}</h1>
       <p>{description}</p>
       <p>{start_date} - {end_date}</p>
       <p>{budget} rupees, {adults} Adults, {kids?`${kids} Kids`:''} {pets && <PetIcon/>}</p>
    </StyledInfoContainer>
    </StyledImage>
    {/* <div style={{height:'400px',width: '600px'}}></div> */}
   
  </StyledContainer>;
};

export default PlanCard;
