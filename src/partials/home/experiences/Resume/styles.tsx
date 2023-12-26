import styled from "@emotion/styled";

export const ResumeContainer = styled.div`
  &:hover > div:first-child::after {
    opacity: 1;
    bottom: -2px;
  }

  & > div:first-child::after {
    background-color: #5eced4;
    content: "";
    position: absolute;
    height: 2px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    opacity: 0;
  }
`;
