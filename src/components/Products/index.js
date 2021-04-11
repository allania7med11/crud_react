import React, { useState } from 'react';
import "./index.scss"
import Form from "./Form";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Products = () => {
  const [show, setShow] = useState(false);
  return (
  <div className="products">
    <button onClick={() => setShow(true)} className="btn bg-primary">
      <FontAwesomeIcon className="mx-1" icon={faPlus} />
      New product
    </button>
    { show ? <Form setShow={setShow.bind(this,false)} /> : ""}
    <Table />
  </div>
)};
export default Products;
