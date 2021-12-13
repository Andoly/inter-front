import * as S from "./styles";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Statement from "./Statement";

export const Dashboard = () => {
  const wallet = 5000;
  return (
    <S.DashboardBackground>
      <Header />
      <S.BodyContainer>
        <div>
          <Card noShadow width="90%">
            <S.InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
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
              <Input style={{ flex: 1 }} />
              <Button>Gerar código</Button>
            </S.InlineContainer>

            <p className="primary-color">Pix copia e cola:</p>
            <p className="primary-color">chave123</p>
          </Card>
          <Card noShadow width="90%">
            <S.InlineTitle>
              <h2 className="h2">Pagar PIX</h2>
            </S.InlineTitle>
            <S.InlineContainer>
              <Input />
              <Button>Pagar PIX</Button>
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
