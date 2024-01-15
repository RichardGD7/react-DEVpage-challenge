import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);
  const username = localStorage.getItem("username");
  const imgProfileUser = localStorage.getItem("imgProfileUser");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <nav className=" bg-white drop-shadow ">
      <div className="flex flex-row justify-between items-center m-auto p-2 max-w-[1280px] ">
        <div className="flex flex-row gap-2">
          <img
            className="max-h-[40px] pr-3 cursor-pointer"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="dev-logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <input
            placeholder="Search..."
            type="text"
            className="p-2 rounded-md border border-gray-400 w-full"
          />
          <button className="p-2 rounded-md border border-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline text-indigo-600 font-semibold cursor-pointer">
            Search
          </button>
        </div>

        <div className="flex gap-3">
          {isLogged ? (
            <>
              <button
                className="p-3 rounded-md border border-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline text-indigo-600 font-semibold cursor-pointer"
                onClick={() => {
                  navigate("/new-user");
                }}
              >
                Create Post
              </button>
              <img
                src={`${imgProfileUser}`}
                alt="profile-pic"
                className="rounded-full max-h-[40px] object-none"
              />
              <button
                className="p-3 rounded-md hover:bg-red-100/50 hover:text-red-600 hover:underline text-gray-600 cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <button
                className="p-3 rounded-md hover:bg-purple-400/20 hover:text-purple-900 hover:underline text-gray-600 cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log in
              </button>
              <button
                className="p-3 rounded-md border border-indigo-600 hover:bg-indigo-600 hover:text-white hover:underline text-indigo-600 font-semibold cursor-pointer"
                onClick={() => {
                  navigate("/new-user");
                }}
              >
                Create account
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
