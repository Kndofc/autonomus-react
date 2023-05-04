import React from "react";
import { View, Text, ScrollView } from "react-native";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../../config/Typography";

const Description = () => {
  return (
    <Container>
      <ScrollView>
        <Typography.H1>Descrição da acomodação</Typography.H1>
        <Spacing />
        <Typography.P>
           Um tranquilo muro de pedra em estilo Jeju localizado no oeste de Jeju, uma área elegante,
           Um pequeno lugar em frente à praia em Gwideok-ri, onde você pode ver o mar do alojamento
           É uma acomodação. 30 minutos de carro do Aeroporto de Jeju, 8 minutos a pé
           Existe uma paragem de autocarro na rua e uma loja de conveniência a 10 minutos a pé.
        </Typography.P>
        <Spacing />
        <Typography.P>
        Um tranquilo muro de pedra em estilo Jeju localizado no oeste de Jeju, uma área elegante,
           Um pequeno lugar em frente à praia em Gwideok-ri, onde você pode ver o mar do alojamento
           É uma acomodação. 30 minutos de carro do Aeroporto de Jeju, 8 minutos a pé
           Existe uma paragem de autocarro na rua e uma loja de conveniência a 10 minutos a pé.
        </Typography.P>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
`;

const Spacing = styled.View`
  padding: 10px 0;
`;

export default Description;
