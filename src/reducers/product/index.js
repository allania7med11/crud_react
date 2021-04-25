const initial = {
  action: "create",
  show: false,
  current: {
    name: "",
    price: "",
    description: "",
  },
  list: [],
  fields : [
    { label: "Name", value: "name" },
    { label: "Price", value: "price" },
    { label: "Description", value: "description" },
  ]
};

function product(state = initial, { type, payload }) {
  switch (type) {
    case "product/current":
      return {
        ...state,
        current: payload.current ? payload.current : initial.current,
        action: payload.action,
        show: true,
      };
    case "product/list":
      return { ...state, list: payload.list, show: false };
    case "product/close":
      return { ...state, show: false };
    default:
      return state;
  }
}
export default product;
