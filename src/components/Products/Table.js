import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
const fields = [
  { label: "Name", value: "name" },
  { label: "Price", value: "price" },
  { label: "Description", value: "description" },
];
const Product = ({ product }) => {
  return (
    <>
      {fields.map((field) => (
        <div className="header">{product[field.value]}</div>
      ))}
      <div>
        <button class="btn bg-warning px-3 py-1">
          <FontAwesomeIcon className="mx-1" icon={faPencilAlt} />
        </button>
        <button class="btn bg-danger px-3 py-1">
          <FontAwesomeIcon className="mx-1" icon={faTrash} />
        </button>
      </div>
    </>
  );
};
const Table = ({ products }) => (
  <div className="grid-container">
    {fields.map((field) => (
      <div class="header">{field.label}</div>
    ))}
    <div class="header">Actions</div>
    {products.map((product) => (
      <Product product={product} />
    ))}
  </div>
);
export default Table;
