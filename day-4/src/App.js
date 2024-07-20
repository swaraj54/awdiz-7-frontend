import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseState from "./25-05/UseState";
import NotFound from "./NotFound";
import UseState2 from "./26-05/UseState2";
import UseEffect from "./26-05/UseEffect1";
import UseEffect2 from "./26-05/UseEffect2";
import UseEffect3 from "./29-05/UseEffect3";
import Routing from "./30-05/Routing";
import UserDetails from "./30-05/UserDetails";
import Mapping from "./02-06/Mapping";
import AllProducts from "./02-06/AllProducts";
import FunctionProp from "./04-06/FunctionProp";
import StyledComponents from "./04-06/StyledComponents";
import InlineStyling from "./04-06/InlineStyling";
import Todo from "./06-06/Todo";
import Register from "./08-06/Register";
import Login from "./08-06/Login";
import Reducer from "./15-06/Reducer";
import ReduxCounter from "./20-06/ReduxCounter";
import UseCallbackComponent from "./29-06/UseCallbackComponent";
import UseMemoComponent from "./29-06/UseMemoComponent";
import UseRefComponent from "./30-06/UseRefComponent";
import UseRef2Component from "./30-06/UseRef2Component";
import Cart from "./16-07/Cart";
import RegisterAdmin from "./20-07/RegisterAdmin";
import LoginAdmin from "./20-07/LoginAdmin";
import AddProduct from "./20-07/AddProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state-2" element={<UseState2 />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect-2" element={<UseEffect2 />} />
        <Route path="/use-effect-3" element={<UseEffect3 />} />
        <Route path="/use-navigate" element={<Routing />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route
          path="/mapping"
          element={<Mapping students={["Virat", "Rohit", "Rahul"]} />}
        />
        <Route path="/all-products" element={<AllProducts />} />

        <Route path="/function-prop" element={<FunctionProp />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/inline-styling" element={<InlineStyling />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />
        <Route path="/use-callback" element={<UseCallbackComponent />} />
        <Route path="/use-memo" element={<UseMemoComponent />} />
        <Route path="/use-ref" element={<UseRefComponent />} />
        <Route path="/use-ref-2" element={<UseRef2Component />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<AddProduct />} />
        {/* useState 
        useEffect 
        useNavigate 
        useParams
        useReducer 
        useContext 
        useRef 
        useMemo 
        useCallback */}
      </Routes>
    </div>
  );
}

export default App;
