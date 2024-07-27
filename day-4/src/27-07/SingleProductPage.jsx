import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../axiosConfig";

const SingleProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});

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
            <button>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;


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
