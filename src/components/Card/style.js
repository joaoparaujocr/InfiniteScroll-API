import styled from "styled-components";

const setColorBackground = {
  unknown: "gray",
  alive: "green",
  dead: "red",
}

const CardStyle = styled.li`
  width: calc((100% / 4) - 20px);
  padding: 20px 2%;
  display: flex;
  flex-direction: column;
  background-color: ${({ status }) => setColorBackground[status]};
  border-radius: 5px;
  color: white;

  @media screen and (max-width: 888px) { width: calc((100% / 3) - 20px); }

  @media screen and (max-width: 588px) { width: calc((100% / 2) - 20px); }

  @media screen and (max-width: 410px) { width: calc(100%  - 20px); }
`;

export default CardStyle