import React from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination, Form } from "react-bootstrap";

const Pages = observer(() => {
  const { device } = React.useContext(Context);
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <>
      <div className="mt-5 d-flex flex-row align-items-middle ">
        <div>Отображать товаров на странице:</div>
        <Form.Select
        className="ms-2"
          onChange={(e) => device.setLimit(e.target.value)}
          value={device.limit}
          size="sm"
          style={{ width: "5rem" }}
          aria-label="Default select example"
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="9">9</option>
        </Form.Select>
      </div>

      <Pagination className="mt-2">
        {pages.map((page) => (
          <Pagination.Item
            key={page}
            onClick={() => device.setPage(page)}
            active={page === device.page}
          >
            {page}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
});

export default Pages;
