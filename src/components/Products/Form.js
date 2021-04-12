import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Form = ({ product, updateProduct, close }) => {
  const modalRef = useRef();
  const updateShow = (evt) => {
    if (evt.target === modalRef.current) {
      close();
    }
  };
  const updatePrice = ({ target }) => {
    let evt = {};
    evt.target = { name: target.name, value: Number(target.value) };
    updateProduct(evt);
  };
  return (
    <div ref={modalRef} onClick={updateShow} className="modal">
      <div className="card">
        <div onClick={close} className="close">
          <FontAwesomeIcon className="mx-1" icon={faTimes} />
        </div>
        <form>
          {JSON.stringify(product)}
          <label htmlFor="fname">Name:</label>
          <input
            value={product.name}
            onChange={updateProduct}
            type="text"
            id="fname"
            name="name"
            required
          />
          <label htmlFor="fprice">Price:</label>
          <input
            value={product.price}
            onChange={updatePrice}
            type="number"
            id="fprice"
            name="price"
            required
          />
          <label htmlFor="fdescription">Decription:</label>
          <input
            value={product.description}
            onChange={updateProduct}
            type="text"
            id="fdescription"
            name="description"
            required
          />
        </form>
      </div>
    </div>
  );
};
export default Form;
