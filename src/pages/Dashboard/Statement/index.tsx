import * as S from "./styles";
import { FiDollarSign } from "react-icons/fi";
import { format } from "date-fns";

interface StatementItem {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
  updatedAt: Date;
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItem) => {
  return (
    <S.StatementItemContainer>
      <S.StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </S.StatementItemImage>
      <S.StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p className="">
          {type === "pay" ? `Pago a ` : `Recebido de`}{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p className="">{format(updatedAt, "dd/MM/yyyy 'às' HH:mm'h'")}</p>
      </S.StatementItemInfo>
    </S.StatementItemContainer>
  );
};

const Statement = () => {
  const statements: StatementItem[] = [
    {
      user: {
        firstName: "Andoly",
        lastName: "Borges",
      },
      value: 220.0,
      type: "pay",
      updatedAt: new Date(),
    },
    {
      user: {
        firstName: "José",
        lastName: "Cardozo",
      },
      value: 370.0,
      type: "received",
      updatedAt: new Date(),
    },
  ];
  return (
    <S.StatementContainer>
      {statements.map((statement) => (
        <StatementItem {...statement} />
      ))}
    </S.StatementContainer>
  );
};

export default Statement;
