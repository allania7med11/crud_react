import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { currentUpdate } from "@actions/product";
import { useDispatch } from "react-redux";

const Product = ({ fields, product, row }) => {
  const dispatch = useDispatch();
  var classRow = `item col rg_${Number(row) % 2}`;
  return (
    <>
      {fields.map((field, key) => (
        <div key={key} className={classRow}>
          {product[field.value]}
        </div>
      ))}
      <div className={classRow}>
        <button
          onClick={() => dispatch(currentUpdate({ product, action: "update" }))}
          className="btn bg-warning px-3 py-1"
        >
          <FontAwesomeIcon className="mx-1" icon={faPencilAlt} />
        </button>
        <button
          onClick={() => dispatch(currentUpdate({ product, action: "delete" }))}
          className="btn bg-danger px-3 py-1"
        >
          <FontAwesomeIcon className="mx-1" icon={faTrash} />
        </button>
      </div>
    </>
  );
};
export default Product;
