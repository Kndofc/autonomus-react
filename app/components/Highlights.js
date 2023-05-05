import React from "react";
import { View } from "react-native";

//import styles and assets
import styled from "styled-components";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../config/colors";
import * as Typography from "../config/Typography";

export const SuperClean = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="spinner" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>limpeza aprimorada</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
          Este host foi desenvolvido em colaboração com os principais especialistas nos setores de saúde pública e hotelaria.
             Atende aos padrões rigorosos de limpeza aprimorada.
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const SelfCheckin = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="unlock" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>Check-in automático</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
          Faça check-in usando o teclado
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const Clean = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="like" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>alojamento limpo e arrumado</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
          13 hóspedes recentes avaliaram este lugar como imaculado
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const SuperHost = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="trophy" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>Você é um Superhost</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
          Os superhosts são altamente experientes e altamente avaliados, permitindo que os hóspedes
             Este é um anfitrião que faz o possível para tornar sua estadia confortável.
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const Location = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="location" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>ótima localização de acomodação</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
          94% dos hóspedes recentes classificaram o local como 5 estrelas.
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

export const FreeCancellation = () => {
  return (
    <View>
      <Highlight>
        <EvilIcons name="calendar" size={34} color={Colors.black} />
        <HglText>
          <Typography.Sub1>Cancelamento gratuito até 29 de julho</Typography.Sub1>
          <Typography.P colors={Colors.gray}>
          Depois disso, se você cancelar sua reserva antes das 15h do dia 7 de agosto, excluindo a taxa de serviço
             Um reembolso total será dado.
          </Typography.P>
        </HglText>
      </Highlight>
    </View>
  );
};

const Highlight = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

const HglText = styled.View`
  flex-shrink: 1;
  margin-left: 10px;
`;
