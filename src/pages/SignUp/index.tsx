import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

import Card from "../../components/Card";
import background from "../../assets/images/background-login.jpg";
import logoInter from "../../assets/images/Inter-orange.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleToSignUp = () => {
    navigate("/dashboard");
  };
  return (
    <S.Wrapper>
      <S.Background image={background} />
      <Card width="403px">
        <img src={logoInter} width={172} height={61} alt="Logo Inter" />

        <S.InputContainer>
          <Input placeholder="Nome" />
          <Input placeholder="Sobrenome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Confirmar senha" type="password" />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button type="button" onClick={handleToSignUp}>
            Cadastrar
          </Button>
          <p>
            Já tem uma conta? <Link to="/signin">Entrar</Link>
          </p>
        </S.ButtonContainer>
      </Card>
    </S.Wrapper>
  );
};
