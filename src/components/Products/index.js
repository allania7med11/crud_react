import "./index.scss"
import Form from "./Form";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Products = () => (
  <div className="products">
    <button className="btn bg-primary">
      <FontAwesomeIcon className="mx-1" icon={faPlus} />
      New product
    </button>
    <Form />
    <Table />
  </div>
);
export default Products;
