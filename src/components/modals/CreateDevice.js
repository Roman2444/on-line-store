import React, { useContext } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index";

const CreateDevice = ({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = React.useState([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((info) => info.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Выберите тип
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Выберите бренд
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder={"Введите название устройства"}
          />
          <Form.Control
            className="mt-3"
            placeholder={"Введите стоимость устройства"}
            type="number"
          />
          <Form.Control
            className="mt-3"
            placeholder={"Введите название устройства"}
            type="file"
          />
          <hr />
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder={"Введите название свойства"} />
              </Col>
              <Col md={4}>
                <Form.Control placeholder={"Введите описание свойства"} />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
          <Button
            className="mt-3"
            onClick={() => addInfo()}
            variant="outline-dark"
          >
            Добавить новое свойство
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
