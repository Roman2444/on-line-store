import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { device } = React.useContext(Context);

  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          active={device.selectedType.id === type.id}
          onClick={() => device.setSelectedType(type)}
          style={{ cursor: "pointer" }}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
      <ListGroup.Item
        active={Object.keys(device.selectedType).length === 0}
        onClick={() => device.setSelectedType({})}
        style={{ cursor: "pointer" }}
        key={"all"}
      >
        {"Все товары"}
      </ListGroup.Item>
    </ListGroup>
  );
});

export default TypeBar;
