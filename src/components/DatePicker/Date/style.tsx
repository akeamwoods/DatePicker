import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

type Props = {
  differentMonth: boolean;
};

export const DateText = styled.p.attrs((props: Props) => ({}))<Props>`
  opacity: ${props => (props.differentMonth ? 0.5 : 1)};
`;
