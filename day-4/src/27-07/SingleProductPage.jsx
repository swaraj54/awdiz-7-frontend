import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../axiosConfig";
import { AuthContext } from "../context/auth.context";
import toast from "react-hot-toast";

const SingleProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const { state } = useContext(AuthContext);

  async function AddToCart() {
    try {
      const response = await Api.post("/user/add-to-cart", {
        userId: state?.user?.userId,
        productId: id,
      });
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getSingleProductData() {
    setLoading(true);
    try {
      const response = await Api.post("/product/get-single-product", {
        productId: id,
      });
      if (response.data.success) {
        setLoading(false);
        setProduct(response.data.product);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      getSingleProductData();
    }
  }, [id]);
  return (
    <div>
      <h1>Single Product Page</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img src={product.image} />
          </div>
          <div>
            <h1>Name : {product.name}</h1>
            <h1>Price : {product.price}</h1>
            <h1>Category : {product.category}</h1>
            <h1>Quantity :{product.quantity}</h1>
            <button>Add to Wishlist</button>
            <button onClick={AddToCart}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;

// Cart

// frontend
// userId  -> context
// productId  -> id

// backend
// route -> add to cart
// controller -> addToCart
// Cart schema -> user : { mongoose.schema.type.objectId, ref : user} , cartProducts : [{mongoose.schema.types.objectId, ref :"Product"}]

// frontend cart page
// userId ->  backend
// userId use for Cart schema
