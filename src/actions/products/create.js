import api from "@app/api/products";
export const asyncCreateProduct = ({ name, price, description }) => {
  return async (dispatch) => {
    try {
      let data = await api.create({ name, price, description });
      dispatch(createProductSuccess(data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const createProductSuccess = (product) => ({
  type: "CREATE_PRODUCT_SUCCESS",
  payload: product,
});
