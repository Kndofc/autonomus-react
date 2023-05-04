import React from "react";
import { FlatList, View } from "react-native";

//import components
import * as Cards from "../components/Cards";

//import styles and icons
import styled from "styled-components";
import { H } from "../config/Typography";

//import data
import { rooms } from "../data/tripdata";

const Trip = ({ navigation }) => {
  const handleDate = (item) => {
    let date = item.check_in_date;
    let parseDate = date.split("-");
    let newDate = {
      year: `${parseDate[0]}ano`,
      month: `${parseDate[1]}mês`,
      day: `${parseDate[2]}dia`,
    };
    return newDate.year + " " + newDate.month;
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={
          <Header>
            <H>Viagem</H>
          </Header>
        }
        data={rooms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 24 }}>
            <Cards.Default
              image={item.images[0]}
              sub={handleDate(item)}
              title={item.city}
              secondary={item.title}
              action="Ver planos de viagem"
              onPress={() => navigation.navigate("TripDetails", item)}
            />
          </View>
        )}
      ></FlatList>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 45px;
`;

const Header = styled.View`
  padding: 24px;
`;

export default Trip;
