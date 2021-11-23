import styled from "styled-components"

export const CharacterCard = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    background-color: #e0cbff;
    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }
`


export const H1Card = styled.h1`
  font-size: 20px;

`

export const ImageBackground = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: column;
background-color: black;


`
export const Title = styled.div`
background-color: #e0cbff;
height: 10vh ;
with: 40vw;
font-size : 50px;
border-radius: 5px;
font-family: roobot;
`
