import api from "@app/apis/product";
import React, { useState, useEffect, useCallback } from "react";
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
  products: [],
};
const Products = () => {
  const [state, setState] = useState(stateDefault);
  const updateProducts = useCallback(async () => {
    try {
      let response = await api.read();
      setState({ ...state, products: response.data, show: false });
    } catch (err) {
      console.log({ err });
    }
  }, []);
  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
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
        <Form
          action={state.action}
          productInit={state.product}
          close={close}
          updateProducts={updateProducts}
        />
      ) : (
        ""
      )}
      <Table />
      {JSON.stringify(state.products)}
    </div>
  );
};
export default Products;
