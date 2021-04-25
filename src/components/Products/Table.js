import "@css/Table.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const fields = [
  { label: "Name", value: "name" },
  { label: "Price", value: "price" },
  { label: "Description", value: "description" },
];
const Product = ({ product, row, update, delet }) => {
  var classRow = `item col rg_${Number(row) % 2}`;
  return (
    <>
      {fields.map((field, key) => (
        <div key={key} className={classRow}>
          {product[field.value]}
        </div>
      ))}
      <div className={classRow}>
        <button onClick={update} className="btn bg-warning px-3 py-1">
          <FontAwesomeIcon className="mx-1" icon={faPencilAlt} />
        </button>
        <button onClick={delet} className="btn bg-danger px-3 py-1">
          <FontAwesomeIcon className="mx-1" icon={faTrash} />
        </button>
      </div>
    </>
  );
};
const Table = ({ products, update, delet }) => {
 // const state = useSelector
  return (
  <div className="grid-container">
    {fields.map((field, key) => (
      <div key={key} className="header">
        {field.label}
      </div>
    ))}
    <div className="header">Actions</div>
    {products.map((product, key) => (
      <Product
        key={key}
        product={product}
        row={key}
        update={() => update(product)}
        delet={() => delet(product)}
      />
    ))}
  </div>
)};
export default Table;
function useSelector(arg0) {
  throw new Error("Function not implemented.");
}

