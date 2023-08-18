import styled from "styled-components";

export const CustomCard = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  min-height: 100px;
  margin: 8px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
