/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";

import logoInter from "../../assets/images/Inter-orange.png";
import UserCircle from "../UserCircle";
import * as S from "./styles";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const initials = user?.firstName.charAt(0) + user?.lastName.charAt(0);

  const handleLogoff = () => {
    navigate("/signin");
  };
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="logo Inter" />
        <S.UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>
              Olá,{" "}
              <span className="primary-color font-bold">
                {user.firstName} {user.lastName}
              </span>
            </p>
            <strong>
              {user.accountNumber}-{user.accountDigit}
            </strong>
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
