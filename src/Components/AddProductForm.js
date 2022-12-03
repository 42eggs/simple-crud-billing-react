import { useEffect } from "react";

const AddProductForm = ({ newProduct, setNewProduct, addProductHandler }) => {
  useEffect(() => {
    let tempTotal = Number(newProduct.qty) * Number(newProduct.rate);
    setNewProduct({ ...newProduct, total: tempTotal });
  }, [newProduct.qty, newProduct.rate]);

  return (
    <>
      <div className="row border border-white p-4">
        <div className="col">
          <label>Product Name</label>
          <input
            value={newProduct && newProduct.name}
            onInput={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col">
          <label>Quantity</label>
          <input
            value={newProduct && newProduct.qty}
            onInput={(e) =>
              setNewProduct({
                ...newProduct,
                qty: e.target.value.trim(),
              })
            }
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col">
          <label>Rate</label>
          <input
            value={newProduct && newProduct.rate}
            onInput={(e) =>
              setNewProduct({
                ...newProduct,
                rate: e.target.value.trim(),
              })
            }
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col">
          <label>Total</label>
          <input
            disabled={true}
            value={newProduct && newProduct.total}
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col-auto d-flex justify-content-center align-items-center">
          <button
            onClick={addProductHandler}
            className="btn btn-lg btn-success"
          >
            Add Product
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddProductForm;
