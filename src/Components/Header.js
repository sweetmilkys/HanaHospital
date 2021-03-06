import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
  left: 0;
  top: 0;
  border-top: 3px ${props => props.theme.mainColor} solid;
  z-index: 100;
  @media only screen and (min-width: 0px) and (max-width: 750px) {
    box-shadow: none;
  }
`;

const LogoBox = styled.div``;

const Logo = styled(Link)`
  display: block;
  position: absolute;
  top: 22px;
  background-image: url(${props => props.bgurl});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
  height: 40px;
  width: 220px;
  z-index: 1;
`;

const NavBox = styled.nav`
  @media only screen and (min-width: 0px) and (max-width: 750px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: block;
  position: relative;
  top: 0;
  padding: 0px;
  margin: 0px;
  list-style: none;
  left: 240px;
`;

const Li = styled.li`
  float: left;
  width: 100px;
  height: 88px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  :hover {
    border-bottom: 4px solid ${props => props.theme.mainColor};
    transition-duration: 0.3s;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${props => (props.current ? props.theme.mainColor : "#333")};
  text-decoration: none !important;
  line-height: 88px;
  :hover {
    color: ${props => props.theme.mainColor};
    transition-duration: 0.3s;
  }
`;

const MenuBox = styled.div`
  display: none;
  text-align: right;
  @media only screen and (min-width: 0px) and (max-width: 750px) {
    display: block;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.15);
    transition-duration: 0.3s;
  }
`;

const MenuBtn = styled.i`
  color: ${props => props.theme.mainColor};
  padding-right: 20px;
  line-height: 87px;
  font-size: 1.8em;
`;

const MenuUi = styled.ul``;

const MenuLi = styled.li``;

const MenuLink = styled(Link)`
  background: rgba(255, 255, 255, 0.9);
  padding: 12px 15px;
  text-align: center;
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.current ? props.theme.mainColor : "#333")};
  text-decoration: none !important;

  :hover {
    color: ${props => props.theme.mainColor};
    transition-duration: 0.3s;
  }
`;

const Header = withRouter(({ location: { pathname } }) => {
  const routes = [
    { to: "/intro", name: "병원소개" },
    { to: "/about", name: "의료진소개" },
    { to: "/facilities", name: "내부시설" },
    //{ to: "/departments", name: "진료과목" },
    { to: "/info", name: "진료안내" }
  ];
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => setIsHidden(isHidden ? false : true);

  return (
    <Container>
      <LogoBox>
        <Logo to="/home" bgurl={require("../assets/images/logo.png")} />
      </LogoBox>
      <NavBox>
        <Ul>
          {routes.map((route, index) => (
            <Li key={index}>
              <StyledLink to={route.to} current={pathname === route.to}>
                {route.name}
              </StyledLink>
            </Li>
          ))}
        </Ul>
      </NavBox>
      <MenuBox>
        <MenuBtn onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
        {isHidden ? null : (
          <MenuUi>
            {routes.map((route, index) => (
              <MenuLi key={index}>
                <MenuLink to={route.to} current={pathname === route.to}>
                  {route.name}
                </MenuLink>
              </MenuLi>
            ))}
          </MenuUi>
        )}
      </MenuBox>
    </Container>
  );
});

export default Header;

/*ToDo
 - 진료과목 임시 막아둠
 */
