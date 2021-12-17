import { useEffect, useState } from "react";
import * as S from "./styles";
import { FiDollarSign } from "react-icons/fi";
import { format } from "date-fns";
import { transactions } from "../../../services/resources/pix";

interface StatementItem {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "paid" | "received";
  updatedAt: Date;
}

const StatementItemComponent = ({
  user,
  value,
  type,
  updatedAt,
}: StatementItem) => {
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
        <p>
          {type === "paid" ? `Pago a ` : `Recebido de`}{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>
          {format(new Date(updatedAt), "dd/MM/yyyy 'às' HH:mm'h'")}
        </p>
      </S.StatementItemInfo>
    </S.StatementItemContainer>
  );
};

const Statement = () => {
  const [statements, setStatements] = useState<StatementItem[]>([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data.transactions);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <S.StatementContainer>
      {statements.length > 0 &&
        statements.map((statement) => (
          <StatementItemComponent {...statement} />
        ))}
    </S.StatementContainer>
  );
};

export default Statement;
