/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";
import UserCircle from "../UserCircle";

import logoInter from "../../assets/images/Inter-orange.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoff = () => {
    navigate("/signin");
  };
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="logo Inter" />
        <S.UserInfo>
          <UserCircle initials="PF" />
          <div>
            <p>
              Olá, <span className="primary-color font-bold">Andoly</span>
            </p>
            <strong>21001243-1</strong>
            <br />
            <a href="#" onClick={handleLogoff}>
              Sair
            </a>
          </div>
        </S.UserInfo>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
