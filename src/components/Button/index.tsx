import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.ButtonContainer {...props}>{props.children}</S.ButtonContainer>;
};

export default Button;
