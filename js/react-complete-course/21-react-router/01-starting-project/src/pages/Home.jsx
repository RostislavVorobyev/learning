import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <Link to="/products">TO products</Link>
    </>
  );
}
