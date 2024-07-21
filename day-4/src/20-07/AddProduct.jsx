import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Api from "../axiosConfig";
import { AuthContext } from "../context/auth.context";
import AuthRedirection from "../21-07/AuthRedirection";

const AddProduct = () => {
  const { state } = useContext(AuthContext);
  // console.log(state, "state");
  const router = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    image: "",
  });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);
  // console.log(errors, "errors");

  // console.log(productData, "productData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name);
    setProductData({ ...productData, [event.target.name]: event.target.value });
    // Obj["awdiz"]
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // api call to backend
    try {
      if (
        productData.name &&
        productData.price &&
        productData.category &&
        productData.quantity &&
        productData.image
      ) {
        const response = await Api.post("/product/create-new-product", {
          productData,
        });
        // const response = {
        //   data: { success: true, message: "Regsiter successfull." },
        // };
        if (response.data.success) {
          setProductData({
            name: "",
            price: "",
            category: "",
            quantity: "",
            image: "",
          });
          router("/all-products");
          toast.success(response.data.message);
        }
      } else {
        throw Error("All fields are mandatory.");
        // toast.error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      //   console.log(error);
      //   error =  { data : { success : false, message : "Password is invalid."}}
      toast.error(error.response.data.error);
    }
  }

  useEffect(() => {
    const errorsArray = [];
    if (!productData.name) {
      errorsArray.push("Name is required.");
    }
    if (!productData.price) {
      errorsArray.push("Email is required.");
    }
    if (!productData.category) {
      errorsArray.push("Password is required.");
    }
    if (!productData.quantity) {
      errorsArray.push("Quantity is required.");
    }
    if (!productData.image) {
      errorsArray.push("Image is required.");
    }
    setErrors(errorsArray);
    if (errorsArray.length == 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [productData]);

  // useEffect(() => {
  //   if (state?.user) {
  //     console.log(state?.user, "state?.user in add product");
  //     if (state?.user?.role !== "admin") {
  //       toast.error("You are not allowred to access this page.");
  //       router("/");
  //     }
  //   } else {
  //     toast.error("Login to access page.");
  //     router("/login");
  //   }
  // }, [state]);

  return (
    // <AuthRedirection>
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add New Product</h1>
        <label>Name : </label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={productData.name}
        />
        <br />
        <label>Price : </label>
        <br />
        <input
          type="number"
          onChange={handleChange}
          name="price"
          value={productData.price}
        />
        <br />
        <label>Category : </label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="category"
          value={productData.category}
        />
        <br />
        <label>Quantity : </label>
        <br />
        <input
          type="number"
          onChange={handleChange}
          name="quantity"
          value={productData.quantity}
        />
        <br />
        <label>Image url : </label>
        <br />
        <input
          type="url"
          onChange={handleChange}
          name="image"
          value={productData.image}
        />
        <br />
        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p key={i}>{error}*</p>
            ))}
          </div>
        )}
        <input disabled={disable} type="submit" value="Add" />
        <br />
      </form>
    </div>
    // </AuthRedirection>
  );
};

export default AddProduct;
