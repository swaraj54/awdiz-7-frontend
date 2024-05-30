import { useNavigate } from "react-router-dom";

function Routing() {
  const router = useNavigate();
  return (
    <div>
      <h1>Testing useNavigate </h1>
      <button onClick={() => router("/")}>Go to Home Page</button>
    </div>
  );
}

export default Routing;
