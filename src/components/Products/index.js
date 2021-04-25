import React from "react";
import "@css/products/index.scss";
import Form from "./Form";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { currentUpdate } from "@actions/product";

const Products = () => {
  const show = useSelector((state) => state.product.show);
  const dispatch = useDispatch();
  return (
    <div className="products">
      <button
        onClick={() => dispatch(currentUpdate({ action: "create" }))}
        className="btn bg-primary"
      >
        <FontAwesomeIcon className="mx-1" icon={faPlus} />
        New product
      </button>
      {show && <Form />}
      <Table />
    </div>
  );
};
export default Products;
