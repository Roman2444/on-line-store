import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pages from "../components/Pages";
import BascketList from "../components/BasketList";

const Basket = () => {
  return (
    <Container>
      <h2>Корзина товаров</h2>
      <hr />
      <Row className="mt-2">
        <Col md={9}>
          <BascketList />
        </Col>
      </Row>
    </Container>
  );
};

export default Basket;
