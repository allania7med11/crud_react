import api from "../../apis/product";
export const currentUpdate = (payload) => ({
  type: "product/current",
  payload: payload,
});
export const listUpdate = (payload) => ({
  type: "product/list",
  payload: payload,
});
export const close = () => ({
  type: "product/close",
});

const submitChoice = {
  create: (product) => api.create(product),
  update: (product) => api.update(product.id, product),
  delete: (product) => api.delete(product.id),
};

export const readProducts = () => async (dispatch) => {
  let response = await api.read();
  dispatch(listUpdate({ list: response.data }));
};
export const updateProducts = ({ action, product }) => async (dispatch) => {
  await submitChoice[action](product);
  let response = await api.read();
  dispatch(listUpdate({ list: response.data }));
};
