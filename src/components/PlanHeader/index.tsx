/** @format */

import { formatNumber } from 'src/lib/helper';
import { StyledAmount, StyledBudget, StyledContainer, StyledDate, StyledNote } from './styles';

interface IPlanHeaderProps {
  start_date: string;
  end_date: string;
  expected_budget: number;
  total_budget: number;
}

export const PlanHeader = ({ start_date, end_date, expected_budget, total_budget }: IPlanHeaderProps) => {
  return (
    <StyledContainer>
      <StyledDate>
        Trip starts from {start_date} to {end_date}.
      </StyledDate>
      <div>
        <StyledNote $color={expected_budget >= total_budget ? 'green' : 'red'}>
          *Expected budget is &#8377;{formatNumber(expected_budget)}
        </StyledNote>
        <StyledBudget>
          Total Trip Budget <StyledAmount>&#8377;{formatNumber(total_budget)}</StyledAmount>
        </StyledBudget>
      </div>
    </StyledContainer>
  );
};
