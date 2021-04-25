import { updateProducts,close } from "@actions/product";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

function useProduct({ current, action, dispatch }) {
  const [state, setState] = useState(current);
  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };
  const methods = {
    updateProduct: ({ target }) => updateState({ [target.name]: target.value }),
    submit: async (evt) => {
      evt.preventDefault();
      let product = { ...state, value: parseFloat(state.value) };
      dispatch(updateProducts({ action, product }))
    },
  };
  return [state, methods];
}
function useModal(dispatch) {
  const modalRef = useRef();
  const updateShow = (evt) => {
    if (evt.target === modalRef.current) {
      dispatch(close());
    }
  };
  return [modalRef, updateShow];
}
const actionsInf = {
  create: {
    btn: "btn bg-primary",
    icon: faPlus,
    text: "Create",
  },
  update: {
    btn: "btn bg-warning",
    icon: faPencilAlt,
    text: "Update",
  },
  delete: {
    btn: "btn bg-danger",
    icon: faTrash,
    text: "Delete",
  },
};
const Form = () => {
  const { action, current } = useSelector((state) => {
    let { action, current } = state.product;
    return { action, current };
  });
  const dispatch = useDispatch();
  const [product, { updateProduct, submit }] = useProduct({
    current,
    action,
    dispatch,
  });
  const [modalRef, updateShow] = useModal(dispatch);
  const actionInf = actionsInf[action];
  return (
    <div ref={modalRef} onClick={updateShow} className="modal">
      <div className="card">
        <div onClick={close} className="close">
          <FontAwesomeIcon className="mx-1" icon={faTimes} />
        </div>
        <form onSubmit={submit}>
          {action === "delete" ? (
            <p className="text-center text-2xl">
              Are you sure you want to delete
              <span class="font-bold"> {product.name} </span>product?
            </p>
          ) : (
            <>
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
            </>
          )}
          <div className="text-center">
            <button type="submit" className={actionInf.btn}>
              {actionInf.text}
              <FontAwesomeIcon className="mx-1" icon={actionInf.icon} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
