import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = ({ products, setUpdateData, deleteProductHandler }) => {
  return (
    <Table striped bordered hover variant="dark" className="mt-40">
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((product, index) => {
              return (
                <React.Fragment key={product.id}>
                  <tr>
                    <td className="align-middle">{index + 1}</td>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle">{product.qty}</td>
                    <td className="align-middle">{product.rate}</td>
                    <td className="align-middle">{product.total}</td>
                    <td className="align-middle">
                      <div className="iconsWrap">
                        <button
                          title="Edit"
                          onClick={() => setUpdateData(product)}
                          className="btn btn-primary mr-20"
                        >
                          Edit
                        </button>

                        <button
                          title="Delete"
                          onClick={() => deleteProductHandler(product.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
      </tbody>
    </Table>
  );
};

export default Products;
