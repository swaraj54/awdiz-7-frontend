import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AuthRedirection = ({ children }) => {
  const { state } = useContext(AuthContext);
  const router = useNavigate();
  useEffect(() => {
    console.log(state?.user?.role, "state in useeeffecct");
    if (state?.user?.role == undefined) {
      toast.error("Please login to access this page.");
      //   router("/login");
    }
  }, [state]);
  return children;
};

export default AuthRedirection;
