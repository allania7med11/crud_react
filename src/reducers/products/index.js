var productsReducer = (state = [], { type, payload }) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (type) {
    case "READ_PRODUCTS_SUCCESS":
      return payload;
    default:
      return state;
  }
};
export default productsReducer;
