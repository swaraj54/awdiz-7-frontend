import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/auth.context";
import { themeContext } from "./context/theme.context";

function Home() {
  const { state } = useContext(AuthContext);
  const { themeState, dispatch } = useContext(themeContext);
  console.log(themeState, "themeState");
  const router = useNavigate();
  return (
    <div
      style={{
        backgroundColor: themeState.theme === "light" ? "yellow" : "grey",
      }}
    >
      <h1>Home page -{state?.user?.name}</h1>
      <button onClick={() => router("/use-navigate")}>
        Redirect to Routing page.
      </button>
      <button onClick={() => router("/todo")}>Go to Todo</button>
      <br />
      <button
        onClick={() =>
          dispatch({ type: themeState?.theme === "light" ? "DARK" : "LIGHT" })
        }
      >
        Change {themeState?.theme === "light" ? "light" : "dark"} theme
      </button>
    </div>
  );
}

export default Home;
