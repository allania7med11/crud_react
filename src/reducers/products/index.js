var productsReducer = (state = [], { type, payload }) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (type) {
    case "CREATE_PRODUCT_SUCCESS":
      return [payload, ...state];
    case "READ_PRODUCTS_SUCCESS":
      return payload;
    case "UPDATE_PRODUCT_SUCCESS":
      return state.map((product) =>
        product._id === payload._id ? payload : product
      );
    case "DELETE_PRODUCT_SUCCESS":
      return state.filter((product) => product._id !== payload._id);
    default:
      return state;
  }
};
export default productsReducer