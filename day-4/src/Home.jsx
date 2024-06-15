import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/auth.context";

function Home() {
  const { state } = useContext(AuthContext);
  console.log(state, "state");
  const router = useNavigate();
  return (
    <div>
      <h1>Home page -{state?.user?.name}</h1>
      <button onClick={() => router("/use-navigate")}>
        Redirect to Routing page.
      </button>
      <button onClick={() => router("/todo")}>Go to Todo</button>
    </div>
  );
}

export default Home;
