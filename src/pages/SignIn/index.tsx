import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";

import Card from "../../components/Card";
import background from "../../assets/images/background-login.jpg";
import logoInter from "../../assets/images/Inter-orange.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleToSignIn = () => {
    navigate("/dashboard");
  };
  return (
    <S.Wrapper>
      <S.Background image={background} />
      <Card width="403px">
        <img src={logoInter} width={172} height={61} alt="Logo Inter" />

        <S.InputContainer>
          <Input placeholder="Email" />
          <Input placeholder="Senha" type="password" />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>
            Entrar
          </Button>
          <p>
            Ainda não é cadastrado? <Link to="/signup">Cadastre-se</Link>
          </p>
        </S.ButtonContainer>
      </Card>
    </S.Wrapper>
  );
};
