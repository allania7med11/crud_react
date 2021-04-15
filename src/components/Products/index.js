import api from "@app/apis/product";
import React, { useState, useEffect } from "react";
import "./index.scss";
import Form from "./Form";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const initial = {
  action: "create",
  show: false,
  product: {
    name: "",
    price: "",
    description: "",
  },
  products: [],
};
function useProducts(initial) {
  const [state, setState] = useState(initial);
  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };
  const methods = {
    create: () =>
      updateState({ action: "create", product: initial.product, show: true }),
    close: () => updateState({ show: false }),
    update: async () => {
      let response = await api.read();
      updateState({ products: response.data, show: false });
    },
  };
  useEffect(methods.update, []);
  return [state, methods];
}
const Products = () => {
  const [state, { create, close, update }] = useProducts(initial);
  return (
    <div className="products">
      <button onClick={create} className="btn bg-primary">
        <FontAwesomeIcon className="mx-1" icon={faPlus} />
        New product
      </button>
      {JSON.stringify(state)}
      {state.show && (
        <Form
          action={state.action}
          productInit={state.product}
          close={close}
          update={update}
        />
      )}
      <Table />
      {JSON.stringify(state.products)}
    </div>
  );
};
export default Products;
