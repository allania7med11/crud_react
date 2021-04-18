import api from "@app/apis/product";
import React, { useState, useEffect } from "react";
import "@css/products/index.scss";
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
    update: (product) =>
      updateState({ action: "update", product: product, show: true }),
    delete: (product) =>
      updateState({ action: "delete", product: product, show: true }),
    close: () => updateState({ show: false }),
    read: async () => {
      let response = await api.read();
      updateState({ products: response.data, show: false });
    },
  };
  useEffect(methods.read, []);
  return [state, methods];
}
const Products = () => {
  const [state, methods] = useProducts(initial);
  return (
    <div className="products">
      <button onClick={methods.create} className="btn bg-primary">
        <FontAwesomeIcon className="mx-1" icon={faPlus} />
        New product
      </button>
      {state.show && (
        <Form
          action={state.action}
          productInit={state.product}
          close={methods.close}
          read={methods.read}
        />
      )}
      <Table
        products={state.products}
        update={methods.update}
        delet={methods.delete}
      />
    </div>
  );
};
export default Products;
