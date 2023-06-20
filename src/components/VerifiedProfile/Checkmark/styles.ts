import styled from "styled-components";

export const CheckmarkWrapper = styled("div")`
  --check-size: 44px;
  --check-border-width: 4px;
  --checkmark-width: calc(var(--check-size) / 2);
  --checkmark-height: calc(var(--checkmark-width) / 2);
  --checkmark-left: calc(var(--checkmark-width) / 2);
  --checkmark-top: 50%;
  --checkmark-color: #19b8a2;
  width: var(--check-size);
  height: var(--check-size);
  position: relative;
  margin-left: 1rem;
  margin-right: auto;
  margin-top: 0.2rem;

  @media (max-width: 1200px) {
    display: none;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border: var(--check-border-width) solid #f8f8f8;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    z-index: 0;
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border: var(--check-border-width) solid transparent;
    border-left-color: var(--checkmark-color);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    z-index: 1;
    animation: circle linear forwards 1.1s;
  }
  @keyframes circle {
    0% {
      border-color: transparent;
      border-left-color: var(--checkmark-color);
    }
    90% {
      transform: rotate(-360deg);
      border-color: transparent;
      border-left-color: var(--checkmark-color);
    }
    100% {
      transform: rotate(-360deg);
      border-color: var(--checkmark-color);
    }
  }
`;
export const Checkmark = styled("span")`
  height: var(--checkmark-height);
  width: var(--checkmark-width);
  position: absolute;
  opacity: 0;
  left: var(--checkmark-left);
  top: var(--checkmark-top);
  display: block;
  border-left: var(--check-border-width) solid var(--checkmark-color);
  border-bottom: var(--check-border-width) solid var(--checkmark-color);
  transform-origin: left top;
  transform: rotate(-45deg);
  animation: checkmark linear both 1.5s;

  @keyframes checkmark {
    0% {
      height: 0;
      width: 0;
      opacity: 0;
    }
    80% {
      height: 0;
      width: 0;
      opacity: 0;
    }
    90% {
      height: var(--checkmark-height);
      width: 0;
      opacity: 1;
    }
    100% {
      height: var(--checkmark-height);
      width: var(--checkmark-width);
      opacity: 1;
    }
  }
`;
