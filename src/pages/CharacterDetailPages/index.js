import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getPlanet,
  getCharacter,
  getCharacterList,
} from "../../service/request";
import { ContainerCard, P, PCard, H1Card, Button, Title } from "./styled";

const CharacterDetailPages = (props) => {
  const [character, setCharacter] = useState({});
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    getCharacter(props.url, setCharacter);
  }, [props.url]);

  useEffect(() => {
    getPlanet(character.homeworld, setPlanet);
  }, [character.homeworld]);

  return (
    <ContainerCard>
      <Title>Star Wars</Title>
      <H1Card>Detalhes do Personagem</H1Card>
      {character.name && planet.name ? (
        <div>
          <P>Nome: {character.name}</P>
          <P>Planeta de origem: {planet.name}</P>
        </div>
      ) : (
        <PCard>Carregando...</PCard>
      )}

      <Button onClick={props.goToListPage}>Voltar</Button>
    </ContainerCard>
  );
};

export default CharacterDetailPages;
