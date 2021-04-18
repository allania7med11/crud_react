import api from "@app/api/products";
export const asyncReadProducts = () => {
  return async (dispatch) => {
    try {
      let data = await api.read();
      dispatch(readProductSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const readProductsSuccess = (products) => ({
  type: "READ_PRODUCTS_SUCCESS",
  payload: products,
});
