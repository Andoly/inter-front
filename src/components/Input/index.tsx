import { InputHTMLAttributes } from "react";
import * as S from "./styles";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <S.InputContainer>
      <input {...props} />
    </S.InputContainer>
  );
};

export default Input;
