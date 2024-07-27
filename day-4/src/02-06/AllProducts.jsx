import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../axiosConfig";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");
  const [loading, setLoading] = useState(false);
  const router  = useNavigate()

  async function GetProducts() {
    // alert("Hi from get Products.");
    setLoading(true);
    try {
      const response = await Api.get("/product/get-all-product"); // change
      if (response.data.success) {
        //   console.log(response.data);
        setLoading(false);
        setAllProducts(response.data.products); // change
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // api call to backend
    GetProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
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
          {allProducts.map((product) => (
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
}

export default AllProducts;
