import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../context/auth.context";
import Api from "../axiosConfig";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);

  const router = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, event.target.name);
    setUserData({ ...userData, [event.target.name]: event.target.value });
    // Obj["awdiz"]
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // api call to backend
    try {
      if (userData.email && userData.password) {
          const response = await Api.post("/auth/login" , {userData});
        // const response = {
        //   data: {
        //     success: true,
        //     message: "Login successfull.",
        //     userData: { name: "Awdiz" },
        //   },
        // };
        if (response.data.success) {
          dispatch({ type: "LOGIN", payload: response.data.userData });
          // LOGIN(userData)
          setUserData({
            email: "",
            password: "",
          });
          router("/");
          toast.success(response.data.message);
        } else {
          toast.error(response?.data?.error)
          // console.log(response.data.error, "error")
        }
      } else {
        throw Error("All fields are mandatory.");
        // toast.error("All fields are mandatory.");
      }
    } catch (error) {
      console.log(error, "error");
      //   console.log(error);
      //   error =  { data : { success : false, message : "Password is invalid."}}
      toast.error(error?.response?.data?.error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email : </label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={userData.email}
        />
        <br />
        <label>Password : </label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={userData.password}
        />
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default Login;
