import styled from "styled-components";
import FilterButton from "../FilterButton";
import { useRef, useState } from "react";

export default function FilterButtoonSection() {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  function handleScroll(evt) {
    evt.preventDefault();
    if (isHovering) {
      const container = scrollContainerRef.current;
      container.scrollLeft += evt.deltaY;
    }
  }

  return (
    <StyledWrapper>
      <StyledFilterButtonSection
        ref={scrollContainerRef}
        onWheel={handleScroll}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <FilterButton text={"All"} />
        <FilterButton text={"good with children"} />
        <FilterButton text={"protective"} />
        <FilterButton text={"small"} />
        <FilterButton text={"medium"} />
        <FilterButton text={"large"} />
        <FilterButton text={"All"} />
        <FilterButton text={"All"} />
        <FilterButton text={"All"} />
        <FilterButton text={"All"} />
        <FilterButton text={"All"} />
        <FilterButton text={"All"} />
      </StyledFilterButtonSection>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 0 10px 8px;
  background-color: #f5f5f5;
  z-index: 1;
`;

const StyledFilterButtonSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  width: 90%;
  max-width: 400px;
  gap: 10px;
  scrollbar-width: none;
  margin: auto;
  padding: 2px;
  background-color: #f5f5f5;
  z-index: 1;
`;
