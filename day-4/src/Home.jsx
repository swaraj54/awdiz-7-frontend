import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => router("/use-navigate")}>
        Redirect to Routing page.
      </button>
    </div>
  );
}

export default Home;
