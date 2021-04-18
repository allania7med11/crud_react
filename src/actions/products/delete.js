import api from "@app/api/products";
export const asyncDeleteProduct = (id) => {
  return async (dispatch) => {
    try {
      let data = await api.delete(id);
      dispatch(deleteProductSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteProductSuccess = (id) => ({
  type: "DELETE_PRODUCT_SUCCESS",
  payload: id,
});