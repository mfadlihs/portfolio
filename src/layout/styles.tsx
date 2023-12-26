import styled from "@emotion/styled";

export const LeftContainer = styled.div`
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 50vw;
`;

export const ItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: 0.75rem;
  align-items: center;
  @media (min-width: 768px) {
    &:hover {
      font-size: 1rem;
      line-height: 1.5rem;
      color: rgb(226 232 240 / var(--tw-text-opacity));
      font-weight: 500;
    }

    &:hover > div:first-child {
      width: 3rem;
      height: 1.5px;
      background-color: rgb(226 232 240 / var(--tw-bg-opacity));
    }
  }
`;
