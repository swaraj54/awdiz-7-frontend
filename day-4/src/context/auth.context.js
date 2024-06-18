import { createContext, useEffect, useReducer } from "react";

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

  // useEffect(() => {
  //   alert("Page reloaded.");
  //   // call another api to backend and use locally stored data.
  //   retrive token from storage and send token to backend
  //   token  decrypt -> userid 
  //   {name :"awdiz"}
  //   dispatch({type :"LOGIN" , payload })
  // }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default MyContextProvider;
