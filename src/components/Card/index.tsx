import * as S from "./styles";

interface CardProps {
  width?: string;
  height?: string;
  noShadow?: boolean;
  children?: React.ReactNode;
}

export const Card = ({
  width = "100%",
  height = "auto",
  noShadow = false,
  children,
}: CardProps) => {
  return (
    <S.CardContainer width={width} height={height} noShadow={noShadow}>
      {children}
    </S.CardContainer>
  );
};

export default Card;
