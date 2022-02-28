import styled from "styled-components";

export const CharacterCard = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 300px;
  background-color: #0efff9;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

export const H1Card = styled.h1`
  font-size: 20px;
  color: #0efff9;
`;

export const ImageBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: column;
  background-image: url(/img/star3.jpg);
`;
export const Title = styled.div`
  color: #0efff9;
  height: 10vh;
  with: 40vw;
  font-size: 50px;
  border-radius: 5px;
  font-family: roobot;
`;
