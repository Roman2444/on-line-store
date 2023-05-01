import React from "react";
import { Col, Row, Container, Image, Card, Button } from "react-bootstrap";
import bigStar from "../assets/bigStar.jpg";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "Принтер",
    price: 100,
    rating: 5,
    img: "https://static.onlinetrade.ru/img/items/m/1117638_1.jpg",
  };

  const description = [
    { id: 1, title: "Операционная система", text: "Windows 10" },
    { id: 2, title: "Объем оперативной памяти", text: "4 ГБ" },
    { id: 3, title: "Тип жесткого диска", text: "SSD" },
    { id: 4, title: "Аккумулятор", text: "4000 мАч" },
    { id: 5, title: "Тип жесткого диска", text: "SSD" },
  ];

  return (
    <Container className="mt-3">
      <Row className="d-flex">
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "none",
            }}
          >
            <h2>{device.name}</h2>
            <div
              className="d-flex  align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center / cover`,
                width: 240,
                height: 240,
                fontSize: 60,
              }}
            >
              {device.rating}
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3> От {device.price} рублей</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {description.map((item, ind) => (
          <Row
            key={item.id}
            style={{
              background: ind % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {item.title} : {item.text}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
