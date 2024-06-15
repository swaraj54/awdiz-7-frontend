import { createContext, useReducer } from "react";

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
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default MyContextProvider;
