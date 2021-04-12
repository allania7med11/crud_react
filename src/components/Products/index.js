import React, { useState } from "react";
import "./index.scss";
import Form from "./Form";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const stateDefault = {
  action: "create",
  show: false,
  product: {
    name: "",
    price: "",
    description: "",
  },
};
const Products = () => {
  const [state, setState] = useState(stateDefault);
  const updateProduct = ({ target }) =>
    setState({
      ...state,
      product: { ...state.product, [target.name]: target.value },
    });
  const open = (action, product) => {
    setState({ action, product, show: true });
  };
  const close = () => setState({ ...state, show: false });
  return (
    <div className="products">
      <button
        onClick={() => open("create", stateDefault.product)}
        className="btn bg-primary"
      >
        <FontAwesomeIcon className="mx-1" icon={faPlus} />
        New product
      </button>
      {state.show ? (
        <Form product={state.product} updateProduct={updateProduct} close={close} />
      ) : (
        ""
      )}
      <Table />
    </div>
  );
};
export default Products;
