import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import Api from "../axiosConfig";

function reducer(state, action) {
  console.log(state, action, "inside reducer function..");
  // {type  : 'LOGIN' , payload : {name :'awd', email:"awdw"}}
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}
const initialState = { user: null };

export const AuthContext = createContext();

function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Higher Order Component

  async function getCurrentUser() {
    try {
      const response = await Api.get("/auth/get-current-user");
      if (response.data.success) {
        dispatch({ type: "LOGIN", payload: response.data.userData });
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }
  useEffect(() => {
    getCurrentUser();
    // alert("Page reloaded.");
    // // call another api to backend and use locally stored data.
    // retrive token from storage and send token to backend
    // token  decrypt -> userid
    // {name :"awdiz"}
    // dispatch({type :"LOGIN" , payload })
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default MyContextProvider;
