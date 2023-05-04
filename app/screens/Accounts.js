import React from "react";
import { View, FlatList, Text, SectionList, StatusBar } from "react-native";

import * as List from "../components/List";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import { Cap } from "../config/Typography";

const AccountItems = [
  {
    title: "Gerenciamento aberto",
    data: [
      { title: "Privacidade", icon: "user", screen: "Hosting" },
      { title: "alarme", icon: "bell", screen: "Hosting" },
      { title: "Pagamento", icon: "credit-card", screen: "Hosting" },
    ],
  },
  {
    title: "hospedagem",
    data: [
      { title: "alternar para o modo hospedado", icon: "refresh", screen: "Hosting" },
      { title: "Registre seu serviço ou desejo", icon: "plus", screen: "Hosting" },
    ],
  },
  {
    title: "Ajuda",
    data: [
      { title: "Como usar o Autonomus", icon: "question", screen: "Hosting" },
    ],
  },
];

const Accounts = ({ navigation }) => {
  return (
    <Container>
      <SectionList
        contentContainerStyle={{ paddingVertical: 40, paddingHorizontal: 20 }}
        ListHeaderComponent={
          <List.UserList
            title="Kauan"
            subtitle="View Profile"
            // image={require("../assets/profile.jpg")}
          />
        }
        sections={AccountItems}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginTop: 30, marginBottom: 10 }}>
            <Cap color={colors.gray}>{title}</Cap>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <List.Default
            title={item.title}
            icon={item.icon}
            iconcolor={colors.darkgray}
            // onPress={() => console.log("selected", item)}
            // onPress={() => navigation.navigate(`${item.screen}`)}
          />
        )}
        ItemSeparatorComponent={() => <HLine />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 20px;
`;

const HLine = styled.View`
  width: 100%;
  margin: 0 auto;
  height: 1px;
  background-color: ${colors.lightgray};
`;

export default Accounts;
