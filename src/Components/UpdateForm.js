import { useEffect } from "react";

const UpdateForm = ({
  updateData,
  setUpdateData,
  updateProductHandler,
  cancelUpdateProductHandler,
}) => {
  useEffect(() => {
    let tempTotal = Number(updateData.qty) * Number(updateData.rate);
    setUpdateData({ ...updateData, total: tempTotal });
  }, [updateData.qty, updateData.rate]);

  return (
    <>
      <div className="row border border-white p-4">
        <div className="col">
          <label>Product Name</label>
          <input
            value={updateData && updateData.name}
            onChange={(e) =>
              setUpdateData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col">
          <label>Quantity</label>
          <input
            value={updateData && updateData.qty}
            onChange={(e) =>
              setUpdateData((prevState) => ({
                ...prevState,
                qty: e.target.value,
              }))
            }
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col">
          <label>Rate</label>
          <input
            value={updateData && updateData.rate}
            onChange={(e) =>
              setUpdateData((prevState) => ({
                ...prevState,
                rate: e.target.value,
              }))
            }
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col">
          <label>Total</label>
          <input
            disabled={true}
            value={updateData && updateData.total}
            className="form-control form-control-lg inputs"
          />
        </div>
        <div className="col-auto d-flex justify-content-center align-items-center">
          <button
            onClick={updateProductHandler}
            className="btn btn-lg btn-success mr-20"
          >
            Update
          </button>
          <button
            onClick={cancelUpdateProductHandler}
            className="btn btn-lg btn-warning"
          >
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
