import React, { useEffect, useState } from "react";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();
  console.log(products, "products");
  async function getAllCartProducts() {
    setLoading(true);
    try {
      const response = await Api.get("/user/get-all-cart-product");
      if (response.data.success) {
        setProducts(response.data.cartProducts);
        setLoading(false);
      }
    } catch (error) {
      console.log(error, "error");
    }
  }

  useEffect(() => {
    getAllCartProducts();
  }, []);
  return (
    <div>
      <h1>Cart Products</h1>
      {loading ? (
        <div>
          <h1>Loading...</h1>
          {/* <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>

            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
              }}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src=""
                alt="Loading.."
              />
              <p>Title : Loading</p>
              <p>Price : Laoding</p>
            </div>
          </div> */}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {products.map((product) => (
            <div
              style={{
                width: "23%",
                height: "350px",
                border: "2px solid black",
                marginBottom: "20px",
                cursor: "pointer",
              }}
              onClick={() => router(`/product/${product._id}`)}
            >
              <img
                style={{ width: "80%", height: "70%" }}
                src={product.image}
              />
              <p>Title : {product.name}</p>
              <p>Price : {product.price}/-</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
