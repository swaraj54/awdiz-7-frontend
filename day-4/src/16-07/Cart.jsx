import React, { useEffect } from "react";
import Api from "../axiosConfig";
import toast from "react-hot-toast";

const Cart = () => {
  async function getAllCartProducts() {
    try {
      const response = await Api.get("/user/get-all-cart-product");
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error, "error");
      toast.error(error.response.data.error);
    }
  }

  useEffect(() => {
    getAllCartProducts();
  }, []);
  return <div>Cart</div>;
};

export default Cart;
