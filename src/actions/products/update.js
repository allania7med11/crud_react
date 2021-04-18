import api from "@app/api/products";
export const asyncUpdateProduct = (id, { name, price, description }) => {
  return async (dispatch) => {
    try {
      let data = await api.update(id, { name, price, description });
      dispatch(updateProductSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateProductSuccess = (product) => ({
  type: "UPDATE_PRODUCT_SUCCESS",
  payload: product,
});
