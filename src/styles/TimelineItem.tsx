import styled from "styled-components";

interface TimelineItemProps {
  year: string;
  description: string;
}

const TimelineItem = ({ year, description }: TimelineItemProps) => {
  return (
    <ItemContainer>
      <Year>{year}</Year>
      {description && <Description>{description}</Description>}
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  text-align: center;
  margin: 0 10px;
  cursor: pointer;
`;

const Year = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 0.9em;
  color: #b0b0b0;
  max-width: 200px;
`;

export default TimelineItem;
