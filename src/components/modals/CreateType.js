import React from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../index";

const CreateType = ({ show, onHide }) => {
  const { device } = useContext(Context);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Введите название типа"} />
          {/* <Dropdown>
            <Dropdown.Toggle variant="outline" id="dropdown-basic">
              Выберите тип
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown> */}
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

export default CreateType;