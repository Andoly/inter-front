import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as S from "./styles";
import Card from "../../components/Card";
import background from "../../assets/images/background-login.jpg";
import logoInter from "../../assets/images/Inter-orange.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

import useAuth from "../../hooks/useAuth";

export const SignIn = () => {
  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToSignIn = async () => {
    const data = {
      email,
      password,
    };

    const response = await userSignIn(data);

    if (response.id) {
      navigate("/dashboard");
      return;
    }
    alert("Usuário ou senha inválida");
  };
  return (
    <S.Wrapper>
      <S.Background image={background} />
      <Card width="403px">
        <img src={logoInter} width={172} height={61} alt="Logo Inter" />

        <S.InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
