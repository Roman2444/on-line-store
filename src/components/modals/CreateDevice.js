import React, { useContext } from "react";
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
import { fetchTypes, fetchBrands, createDevice } from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [file, setFile] = React.useState(null);
  const [type, setType] = React.useState("");
  const [brand, setBrand] = React.useState("");

  const [info, setInfo] = React.useState([]);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((info) => info.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((info) =>
        info.number === number ? { ...info, [key]: value } : info
      )
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  React.useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("typeId", device.selectedType.id);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => {
      onHide();
    });
  };

  console.log(device.selectedBrand);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              {device.selectedType.name || "выберите тип"}
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                  >
                    {type.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              {device.selectedBrand.name || "выберите брэнд"}
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                  >
                    {brand.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
          <Form.Control
            className="mt-3"
            placeholder={"Введите название устройства"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder={"Введите стоимость устройства"}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
          />
          <Form.Control className="mt-3" onChange={selectFile} type="file" />
          <hr />
          {info.map((i) => (
            <Row className="mt-3" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder={"Введите название свойства"}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder={"Введите описание свойства"}
                />
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
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
