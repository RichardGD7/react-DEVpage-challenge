import { Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1> DevTo</h1>
      <button
        className="p-3 rounded bg-indigo-600 text-white font-bold cursor-pointer"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>

      <Outlet />
    </>
  );
}
