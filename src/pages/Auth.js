import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = React.useState("123@123.ru");
  const [password, setPassword] = React.useState("12345");

  const click1 = async () => {
    if (isLogin) {
      const response = await login(email, password);
    }
    const response = await registration(email, password);
    console.log(response);
    console.log("11");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <Form className="d-flex flex-column">
          <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
          <Form.Group className="mt-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Введите ваш email"
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Введите ваш пароль"
            />
          </Form.Group>
          <div className="d-flex justify-content-between align-items-center mt-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            {isLogin ? (
              <Button onClick={click1} variant="outline-success" type="submit">
                Войти
              </Button>
            ) : (
              <Button onClick={click1} variant="outline-success" type="submit">
                Зарегистрироваться
              </Button>
            )}
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
