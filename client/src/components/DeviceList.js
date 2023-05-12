import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = React.useContext(Context);

  return (
    <Row className="d-flex mt-3">
      {device.devices.map((el) => (
        <DeviceItem
          key={el.id}
          brand={device.brands[el.brandId - 1].name}
          device={el}
        />
      ))}
    </Row>
  );
});

export default DeviceList;
