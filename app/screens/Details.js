import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Text,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

//import components
import ImgCarousel from "../components/ImgCarousel";
import * as Highlights from "../components/Highlights";
import * as Button from "../components/Button";
import * as List from "../components/List";
import * as IconLabel from "../components/IconLabel";
import { NavBar2 } from "../components/NavBar";
import * as Card from "../components/Cards";

//import screens

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";

//import data
import { review } from "../data/detailreview";

const { width, height } = Dimensions.get("window");

const Details = ({ navigation, route }) => {
  const listing = route.params;
  const opacityValue = new Animated.Value(0);
  const [headerOpacity, setHeaderOpacity] = useState(opacityValue);

  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <View
          style={{
            width: width - 100,
            marginLeft: 20,
            marginTop: 5,
            marginBottom: 5,
            marginRight: 5,
          }}
        >
          <Card.Review
            imagexsmall={item.avatar}
            title={item.username}
            secondary={item.date}
            content={item.comments}
          />
        </View>
      );
    } else {
      return (
        <View style={{ width: width - 100, margin: 5 }}>
          <Card.Review
            imagexsmall={item.avatar}
            title={item.username}
            secondary={item.date}
            content={item.comments}
          />
        </View>
      );
    }
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    if (scrollPosition > 70) {
      Animated.timing(headerOpacity, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(headerOpacity, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  const headerStyle = {
    height: 70,
    width: "100%",
    backgroundColor: "white",
    opacity: headerOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    position: "absolute",
    top: 0,
    left: 0,
  };

  return (
    <Container>
      <View style={{ zIndex: 100 }}>
        <Animated.View style={headerStyle}></Animated.View>
        <NavBar2 nav="chevron-left" onPress={() => navigation.goBack()} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <ImgCarousel images={listing.images} />

        <MainWrapper>
          <Typography.H2>{listing.title}</Typography.H2>
          <Subheading>
            <IconLabel.FA
              icon="star"
              label="4.65"
              label2="(305)"
              color={colors.blueprimary}
            />
            <IconLabel.MCI icon="medal" label="슈퍼호스트" color={colors.blueprimary} />
            <Typography.SP>Cheju, Ilha de Jeju, Coreia do Sul</Typography.SP>
          </Subheading>
          <HLine />
          <Section>
            <Highlights.SuperClean />
            <Highlights.SelfCheckin />
            <Highlights.FreeCancellation />
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Descrição</Typography.H2>
            <Flex>
              <IconLabel.FA icon="bath" label="Bath" qty={listing.baths} />
              <IconLabel.FA icon="bed" label="Bed" qty={listing.beds} />
            </Flex>
            <Typography.P>
              Um tranquilo muro de pedra em estilo Jeju localizado no oeste de Jeju, uma área elegante,
               Um pequeno lugar bem em frente à praia em Gwideok-ri, onde você pode ver o mar maravilhoso do alojamento
               É uma acomodação. 30 minutos de carro do Aeroporto de Jeju, 8 minutos a pé
               Existe uma paragem de autocarro na rua e uma loja de conveniência a 10 minutos a pé.
            </Typography.P>
            <Button.BtnTxtUnderline
              label="ver mais"
              color={colors.gray}
              onPress={() => navigation.navigate("Description", listing)}
            />
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Facilidades</Typography.H2>
            <List.Default
              title="Elevador"
              icon="elevator"
              iconcolor={colors.gray}
            />
            <List.Default
              title="Cozinha"
              icon="food-variant"
              iconcolor={colors.gray}
            />
            <List.Default title="Wifi" icon="wifi" iconcolor={colors.gray} />
            <List.Default
              title="Máquina de lavar"
              icon="dishwasher"
              iconcolor={colors.gray}
            />
            <List.Default
              title="Cable TV"
              icon="youtube-tv"
              iconcolor={colors.gray}
            />
            <Button.BtnTxtUnderline
              label="ver mais"
              color={colors.gray}
              onPress={() => navigation.navigate("Amenities", listing)}
            />
          </Section>
          <HLine />
          <Section>
            <Typography.H2>Localização</Typography.H2>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              scrollEnabled={false}
              initialRegion={{
                latitude: listing.coordinate.latitude,
                longitude: listing.coordinate.longitude,
                latitudeDelta: 0.5,
                longitudeDelta: 0.5,
              }}
            >
              <Marker coordinate={listing.coordinate}></Marker>
            </MapView>
          </Section>
          <HLine />
        </MainWrapper>
        <Section>
          <MarginContainer>
            <Typography.H2>Avaliações</Typography.H2>
          </MarginContainer>

          <FlatList
            data={review.slice(0, 4)}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            decelerationRate={0}
            snapToInterval={width - 90}
            snapToAlignment="center"
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
          <MarginContainer>
            <Button.BtnTxtUnderline
              label="ver mais"
              color={colors.gray}
              onPress={() => navigation.navigate("Reviews", listing)}
            />
          </MarginContainer>
        </Section>
        <HLine />
        <Section>
          <MarginContainer>
            <List.UserList
              image={null}
              title="Anfitrião: Kauan Lopes"
              secondary="Membro desde: dezembro de 2018"
            />
          </MarginContainer>
        </Section>
      </ScrollView>
      <Reserve>
        <View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Typography.Sub2>R${listing.price}</Typography.Sub2>
            <Typography.Sub1 colors={colors.darkgray}> Reais /</Typography.Sub1>
          </View>

          <IconLabel.FA
            icon="star"
            label="4.65"
            label2="(305)"
            color={colors.blueprimary}
          />
        </View>
        <BtnContainer>
          <Button.BtnContain
            label="Contratar"
            color={colors.blueprimary}
            onPress={() => navigation.navigate("Reserve_1", listing)}
          />
        </BtnContainer>
      </Reserve>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const MainWrapper = styled.View`
  flex: 1;
  padding: 20px 30px 20px 20px;
`;

const Subheading = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

const Section = styled.View`
  padding: 18px 0;
`;

const Reserve = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 14px 16px 14px 0;
`;

const HLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lightgray};
`;

const BtnContainer = styled.View`
  width: 50%;
`;

const MarginContainer = styled.View`
  margin-left: 20px;
`;

const styles = StyleSheet.create({
  map: {
    height: 200,
    marginTop: 15,
  },
});

export default Details;
