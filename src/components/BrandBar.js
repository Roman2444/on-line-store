import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {
  const { device } = React.useContext(Context);

  console.log(device);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          className="p-2"
          border={device.selectedBrand.id === brand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
          style={{ cursor: "pointer", width: "auto" }}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
