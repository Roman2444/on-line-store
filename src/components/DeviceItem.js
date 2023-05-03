import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card
        className="p-2 d-flex "
        style={{ cursor: "pointer", width: 200 }}
        key={device.id}
      >
        <Image
          width={120}
          height={120}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 mt-3 d-flex justify-content-between">
          <div>Samsung</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} alt="картинка" />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
