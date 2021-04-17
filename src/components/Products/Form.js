import api from "@app/apis/product";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
const submitChoice = {
  create: (product) => api.create(product),
  update: (product) => api.update(product._id, product),
  delete: (product) => api.delete(product._id),
};

function useProduct({ productInit, action, read }) {
  const [state, setState] = useState(productInit);
  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };
  const methods = {
    updateProduct: ({target}) => updateState({ [target.name]: target.value }),
    submit: async (evt) => {
      evt.preventdefault()
      let obj = { ...state, value: parseFloat(state.value) };
      await submitChoice[action](obj);
      read();
    },
  };
  return [state, methods];
}
function useModal(close) {
  const modalRef = useRef();
  const updateShow = (evt) => {
    if (evt.target === modalRef.current) {
      close();
    }
  };
  return [modalRef, updateShow];
}
const Form = ({ action, productInit, close, read }) => {
  const [product, { updateProduct, submit }] = useProduct({
    productInit,
    action,
    read,
  });
  const [modalRef, updateShow] = useModal(close);
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
            onChange={updateProduct}
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
