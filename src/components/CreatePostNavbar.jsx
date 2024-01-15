import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CreatePostNavbar() {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogged(true);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <nav>
        <div className="flex flex-row justify-between items-center m-auto p-2 max-w-[1280px]">
          <div className="flex flex-row items-center gap-2">
            <img
              className="max-h-[40px] pr-3 cursor-pointer"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="dev-logo"
              onClick={() => {
                navigate("/");
              }}
            />
            <p className="font-semibold">Create Post</p>
          </div>

          <div>
            <a href="/">
              <img
                src="cross-small.png"
                alt="cancel-icon"
                className="max-w-6 hover:bg-indigo-100/50 rounded-md border border-gray-100 hover:border-indigo-400"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
