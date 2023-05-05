import React, { useState } from "react";
import { View } from "react-native";

//import components
import AppForm from "../components/forms/AppForm";
import AppPicker from "../components/AppPicker";
import Counter from "../components/Counter";

//import styles and assets
import styled from "styled-components";
import * as Typography from "../config/Typography";
import colors from "../config/colors";
import * as Button from "../components/Button";

//import redux
import { connect } from "react-redux";
import {
  setPropertyType,
  setMaxGuest,
  setMaxBedroom,
  setMaxBath,
} from "../store/host";

const categories = [
  { label: "apartamento", value: 1 },
  { label: "casa", value: 2 },
  { label: "anexo", value: 3 },
  { label: "hotel boutique", value: 4 },
];

const Hosting = (props) => {
  const [category, setCategory] = useState("");
  const [guest, setGuest] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [bath, setBath] = useState(0);

  const onNavigate = () => {
    props.setPropertyType(category.label);
    props.setMaxGuest(guest);
    props.setMaxBedroom(bedroom);
    props.setMaxBath(bath);
    props.navigation.navigate("HostingStep2");
  };

  return (
    <Container>
      <Main>
        <Typography.H>Vamos começar a registrar para acomodação?</Typography.H>
        <AppForm
          initialValues={{ name: "", price: "", description: "" }}
          onSubmit={(values) => console.log(values)}
        >
          <Step style={{ paddingTop: 20 }}>
            <Typography.Sub1>Para que tipo de acomodação você está se inscrevendo??</Typography.Sub1>
            <InputWrapper>
              <AppPicker
                selectedItem={category}
                onSelectItem={(item) => setCategory(item)}
                items={categories}
                placeholder="Escolha um tipo"
                icon="chevron-down"
              />
            </InputWrapper>
          </Step>
          <Step>
            <Typography.Sub1>
            Quantas pessoas podem ficar?
            </Typography.Sub1>
            <Flex>
              <Typography.P colors={colors.gray}>ocupação máxima</Typography.P>
              <View style={{ width: "30%" }}>
                <Counter
                  result={guest}
                  onMinus={(item) => setGuest(item)}
                  onPlus={(item) => setGuest(item)}
                />
              </View>
            </Flex>
          </Step>
          <Step>
            <Typography.Sub1>
            Quantos quartos estão disponíveis para hóspedes?
            </Typography.Sub1>
            <Flex>
              <Typography.P colors={colors.gray}>quarto</Typography.P>
              <View style={{ width: "30%" }}>
                <Counter
                  result={bedroom}
                  onMinus={(item) => setBedroom(item)}
                  onPlus={(item) => setBedroom(item)}
                />
              </View>
            </Flex>
          </Step>
          <Step>
            <Typography.Sub1>
            Quantos banheiros estão disponíveis para uso dos hóspedes?
            </Typography.Sub1>
            <Flex>
              <Typography.P colors={colors.gray}>banheiro</Typography.P>
              <View style={{ width: "30%" }}>
                <Counter
                  result={bath}
                  onMinus={(item) => setBath(item)}
                  onPlus={(item) => setBath(item)}
                />
              </View>
            </Flex>
          </Step>
        </AppForm>
      </Main>
      <Next>
        <Left></Left>
        <BtnContainer>
          <Button.BtnContain
            label="다음"
            size="small"
            color={colors.blueprimary}
            onPress={() => onNavigate()}
          />
        </BtnContainer>
      </Next>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Main = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

const Next = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${colors.faintgray};
  background-color: white;
`;

const Left = styled.View``;

const BtnContainer = styled.View`
  width: 30%;
`;

const Step = styled.View`
  margin: 20px 0;
`;

const InputWrapper = styled.View`
  margin: 15px 0 10px 0;
`;

const Flex = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 10px 0;
`;

export default connect(null, {
  setPropertyType,
  setMaxGuest,
  setMaxBedroom,
  setMaxBath,
})(Hosting);
