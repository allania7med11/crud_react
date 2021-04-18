import api from "./api";

const end_point = "products";
let apiProduct = {
  create(product) {
    return api.post(end_point, product);
  },
  read() {
    return api.get(end_point);
  },
  update(id, product) {
    return api.patch(`${end_point}/${id}`, product);
  },
  delete(id) {
    return api.delete(`${end_point}/${id}`);
  },
};
export default apiProduct;
