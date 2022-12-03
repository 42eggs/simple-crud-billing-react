import { useState } from "react";
import AddProductForm from "./Components/AddProductForm";
import UpdateForm from "./Components/UpdateForm";
import Products from "./Components/Products";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // Products State
  const [products, setProducts] = useState([]);

  // Temp States
  const [newProduct, setNewProduct] = useState({});
  const [updateData, setUpdateData] = useState({});

  // Add Product
  const addProductHandler = () => {
    if (newProduct) {
      let num = products.length + 1;

      setProducts([
        ...products,
        {
          id: Number(num),
          name: newProduct.name,
          qty: newProduct.qty,
          rate: newProduct.rate,
          total: newProduct.total,
        },
      ]);

      setNewProduct("");
    }
  };

  // Delete Product
  const deleteProductHandler = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Cancel Updating Products
  const cancelUpdateProductHandler = () => {
    setUpdateData("");
  };

  // Update Product
  const updateProductHandler = () => {
    let removeOldRecord = [...products].filter(
      (product) => product.id !== updateData.id
    );
    setProducts([...removeOldRecord, updateData]);

    setUpdateData("");
  };

  return (
    <div className="container App">
      <h2 className="heading">Billing Software</h2>

      <h4 className="descrip">
        {updateData.id ? "Update Product" : "Add Product"}
      </h4>

      {updateData.id ? (
        <UpdateForm
          updateData={updateData}
          setUpdateData={setUpdateData}
          updateProductHandler={updateProductHandler}
          cancelUpdateProductHandler={cancelUpdateProductHandler}
        />
      ) : (
        <AddProductForm
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          addProductHandler={addProductHandler}
        />
      )}

      {products && products.length ? "" : "No Products"}

      <Products
        products={products}
        setUpdateData={setUpdateData}
        deleteProductHandler={deleteProductHandler}
      />
    </div>
  );
}

export default App;
