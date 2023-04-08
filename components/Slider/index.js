import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";

export default function AnswerSlider() {
  return (
    <StyledSlider min={1} max={100} onChange={(value) => console.log(value)} />
  );
}

const StyledSlider = styled(Slider)`
  touch-action: none;
  width: 80%;
  margin: 20px auto;
  position: relative;

  .rc-slider-rail {
    background-color: #e6e6e6;
    height: 24px;
    border-radius: 12px;
  }

  .rc-slider-track {
    background: rgb(11, 4, 131);
    background: linear-gradient(
      101deg,
      rgba(11, 4, 131, 1) 0%,
      rgba(40, 32, 201, 1) 50%,
      rgba(0, 212, 255, 1) 100%
    );
    height: 24px;
    border-radius: 12px;

    &:after {
      content: "Text im Track";
      position: absolute;
      left: 0;
      color: #ffffff;
      font-size: 10px;
      font-weight: 200;
      line-height: 24px;
      padding: 0 8px;
    }
  }

  .rc-slider-handle {
    background-color: #ffffff;
    color: white;
    width: 24px;
    height: 24px;
    margin-top: 0;
    opacity: 1;
    box-shadow: 0 0 0 1px #e6e6e6;
  }
`;
