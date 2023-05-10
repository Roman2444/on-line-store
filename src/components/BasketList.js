import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const BascketList = observer(() => {
  const { device } = React.useContext(Context);

  return (
    <>
      <Row className="d-flex mt-3">
        {device.devices.map((device) => (
          <DeviceItem key={device.id} device={device} />
        ))}
      </Row>
    </>
  );
});

export default BascketList;
