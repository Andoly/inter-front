import { useEffect, useState } from "react";
import * as S from "./styles";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Statement from "./Statement";

import useAuth from "../../hooks/useAuth";
import { pay, request } from "../../services/resources/pix";

export const Dashboard = () => {
  const { user, getCurrentUser } = useAuth();
  const wallet = user?.wallet || 0;

  const [key, setKey] = useState("");
  const [generateKey, setGenerateKey] = useState("");
  const [value, setValue] = useState("");

  const handleNewPayment = async () => {
    const { data } = await request(Number(value));

    if (data.copyPasteKey) {
      setGenerateKey(data.copyPasteKey);
    }
  };

  const handlePayPix = async () => {
    try {
      const { data } = await pay(key);

      if (data.msg) {
        alert(data.msg);
        return;
      }
      alert("Não foi possível realizar o pagamento");
    } catch (e) {
      console.log(e);
      alert("Não é possível receber o PIX do mesmo usuário");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <S.DashboardBackground>
      <Header />
      <S.BodyContainer>
        <div>
          <Card noShadow width="90%">
            <S.InlineTitle>
              <h2 className="h2">Saldo atual</h2>
            </S.InlineTitle>
            <S.InlineContainer>
              <h3 className="wallet">
                {wallet.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </S.InlineContainer>
          </Card>

          <Card noShadow width="90%">
            <S.InlineTitle>
              <h2 className="h2">Receber PIX</h2>
            </S.InlineTitle>
            <S.InlineContainer>
              <Input
                style={{ flex: 1 }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Insira o  valor"
              />
              <Button onClick={handleNewPayment}>Gerar código</Button>
            </S.InlineContainer>
            {generateKey && (
              <>
                <p className="primary-color">Pix copia e cola:</p>
                <p className="primary-color">{generateKey}</p>
              </>
            )}
          </Card>

          <Card noShadow width="90%">
            <S.InlineTitle>
              <h2 className="h2">Pagar PIX</h2>
            </S.InlineTitle>
            <S.InlineContainer>
              <Input
                style={{ flex: 1 }}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Insira a chave"
              />
              <Button onClick={handlePayPix}>Pagar PIX</Button>
            </S.InlineContainer>
          </Card>
        </div>
        <div>
          <Card noShadow width="90%">
            <S.InlineTitle>
              <h2 className="h2">Extrato da conta</h2>
            </S.InlineTitle>
            <Statement />
          </Card>
        </div>
      </S.BodyContainer>
    </S.DashboardBackground>
  );
};
