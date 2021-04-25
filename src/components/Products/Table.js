import "@css/Table.scss";
import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { readProducts } from "@actions/product";

const Table = () => {
  const [fields, products] = useSelector((state) => [
    state.product.fields,
    state.product.list,
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readProducts());
  }, [dispatch]);
  return (
    <div className="grid-container">
      {fields.map((field, key) => (
        <div key={key} className="header">
          {field.label}
        </div>
      ))}
      <div className="header">Actions</div>
      {products.map((product, key) => (
        <Product key={key} fields={fields} product={product} row={key} />
      ))}
    </div>
  );
};
export default Table;
