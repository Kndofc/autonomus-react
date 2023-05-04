import React from "react";

//import components
import * as Button from "../components/Button";

//import styles and assets
import styled from "styled-components";
import colors from "../config/colors";
import * as Typography from "../config/Typography";

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Main>
        <Header>
          <Logo source={require("../assets/logo.png")}></Logo>
          <Typography.H1 color={colors.blueprimary}>Bem vindo ao Autonomus</Typography.H1>
        </Header>
        <Options>
          <Btn>
            <Button.BtnContain
              label="Continuar com Google"
              color={colors.blueprimary}
              labelcolor="white"
              onPress={() => console.log("tbd")}
            />
          </Btn>
          <Btn>
            <Button.BtnOutline
              label="Criar conta"
              color={colors.blueprimary}
              labelcolor={colors.blueprimary}
              fontSize={13}
              onPress={() => navigation.navigate("Signup")}
            />
          </Btn>
          <Btn>
            <Center>
              <Button.BtnText
                label="Entrar"
                color={colors.blueprimaryprimary}
                onPress={() => navigation.navigate("Login")}
              />
            </Center>
          </Btn>
        </Options>
        <Terms>
          <Typography.P color={colors.gray}>
             Ao tocar em Continuar, Criar conta ou Mais opções, concordo em
             Termos de Serviço do Autonomus, Termos de Serviço de Pagamentos, Política de Privacidade
             e Política de Não Discriminação.
          </Typography.P>
        </Terms>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  background-color: #ffffff;
  flex: 1;
`;

const Main = styled.View`
  padding: 30px;
`;

const Header = styled.View`
  padding-top: 80px;
`;

const Logo = styled.Image`
  width: 60px;
  height: 60px;
  resize-mode: contain;
  margin: 10px 0;
`;

const Options = styled.View`
  margin: 30px 0;
`;

const Btn = styled.View`
  margin: 10px 0;
  display: flex;
`;

const Center = styled.View`
  margin: 0 auto;
`;

const Terms = styled.View`
  margin-top: 20px;
`;

export default WelcomeScreen;
