import React from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";

const NavBarMy = observer(() => {
  const { user } = React.useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "auto",
          }}
          to={SHOP_ROUTE}
        >
          КУПИ ДЕВАЙС
        </NavLink>
        {user.isAuth ? (
          <Nav
            style={{
              color: "white",
            }}
            className="ml-auto"
          >
            <Button
              onClick={() => navigate(ADMIN_ROUTE)}
              className="mr-5"
              variant="outline-light"
            >
              Админ панель
            </Button>
            <Button
              onClick={() => logOut()}
              className="ms-2"
              variant="outline-light"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav
            style={{
              color: "white",
            }}
            className="ml-auto"
          >
            <Button
              onClick={() => navigate(LOGIN_ROUTE)}
              variant="outline-light"
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBarMy;
