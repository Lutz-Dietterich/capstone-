import styled from "styled-components";
import FilterButton from "../FilterButton";
import { useRef, useContext } from "react";
import { filterButtonsData } from "../../utils/data/filterButtonsData";
import { useDraggable } from "react-use-draggable-scroll";
import { Filter } from "../../pages/_app";

export default function FilterButtoonSection() {
  const { activeButtonId, handleActiveButtonId } = useContext(Filter);
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <StyledWrapper>
      <StyledFilterButtonSection
        className="flex max-w-xl space-x-3 overflow-x-scroll scrollbar-hide"
        {...events}
        ref={ref}
      >
        {filterButtonsData &&
          filterButtonsData.map((type) => (
            <FilterButton
              key={type.id}
              value={type.value}
              text={type.name}
              isactive={type.id === activeButtonId ? true : false}
              id={type.id}
              setActive={handleActiveButtonId}
            />
          ))}
      </StyledFilterButtonSection>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  padding: 0 10px 8px;
  background-color: #fff7f7;
  z-index: 1;
`;

const StyledFilterButtonSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  scrollbar-width: none;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  width: 90%;
  gap: 10px;
  scrollbar-width: none;
  margin: auto;
  padding: 2px;
  background-color: #fff7f7;
  z-index: 1;

  @media (min-width: 1480px) {
    width: 90%;
  }
`;
