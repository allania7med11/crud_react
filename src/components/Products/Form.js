import api from "@app/apis/product";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
const Form = ({ action, productInit, close, updateProducts }) => {
  const [product, setProduct] = useState(productInit);
  const updateProduct = ({ target }) =>
    setProduct({ ...product, [target.name]: target.value });
  const updatePrice = ({ target }) => {
    let evt = {};
    evt.target = { name: target.name, value: parseFloat(target.value) };
    updateProduct(evt);
  };
  const modalRef = useRef();
  const updateShow = (evt) => {
    if (evt.target === modalRef.current) {
      close();
    }
  };
  const submit = async (evt) => {
    evt.preventDefault();
    try {
      switch (action) {
        case "create":
          await api.create(product);
          break;
        case "update":
          await api.update(product._id, product);
          break;
        case "delete":
          await api.delete(product._id);
          break;
        default: // Do nothing
      }
      await updateProducts();
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div ref={modalRef} onClick={updateShow} className="modal">
      <div className="card">
        <div onClick={close} className="close">
          <FontAwesomeIcon className="mx-1" icon={faTimes} />
        </div>
        <form onSubmit={submit}>
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
          <div className="text-center">
            <button type="submit" className="btn bg-primary">
              Create
              <FontAwesomeIcon className="mx-1" icon={faPlus} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
