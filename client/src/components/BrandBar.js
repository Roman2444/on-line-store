import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BrandBar = observer(() => {
  const { device } = React.useContext(Context);

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
      <Card
        className="p-2"
        border={Object.keys(device.selectedBrand).length === 0 ? "danger" : "light"}
        onClick={() => device.setSelectedBrand({})}
        style={{ cursor: "pointer", width: "auto" }}
        key={"all"}
      >
        {"Все бренды"}
      </Card>
    </Row>
  );
});

export default BrandBar;
