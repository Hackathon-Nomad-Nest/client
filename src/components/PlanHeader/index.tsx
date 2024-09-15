/** @format */

import { StyledAmount, StyledBudget, StyledContainer, StyledDate, StyledNote } from "./styles";

interface IPlanHeaderProps {
  start_date: string;
  end_date: string;
  budget: number;
  expected_budget_range: {
    from: number;
    to: number;
  };
}

export const PlanHeader = ({ start_date, end_date, budget, expected_budget_range }: IPlanHeaderProps) => {
  return (
    <StyledContainer>
      <StyledDate>
        Trip starts from {start_date} to {end_date}.
      </StyledDate>
      <div>
        <StyledNote>
          *Expected budget lies between {expected_budget_range?.from} - {expected_budget_range?.to}
        </StyledNote>
        <StyledBudget>
          Budget <StyledAmount>${budget}</StyledAmount>
        </StyledBudget>
      </div>
    </StyledContainer>
  );
};
