import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function showPassword() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    fetch("http://localhost:5000/users/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("imgProfileUser", data?.imgprofile);
          // localStorage.setItem("username", data?.username);
          localStorage.setItem("nameUser", data?.name);
          setIsLoading(false);
          setIsFailed(false);
          navigate("/");
        } else {
          setIsLoading(false);
          setIsFailed(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsFailed(true);
      });
  }

  return (
    <div className="p-5 w-full max-w-[600px] flex flex-col">
      <div className="flex justify-center py-2">
        <img
          className="object-fill w-16 cursor-pointer"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt="dev_logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <h1 className="font-bold text-2xl flex justify-center p-2">
        Join the DEV Community
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h3 className="font-semibold">Email</h3>
        <input
          type="text"
          className="p-2 rounded border border-gray-400 w-full"
          onChange={onEmailChange}
          value={email}
          required
        />

        <h3 className="font-semibold">Password</h3>
        <input
          type={isPasswordVisible ? "text" : "password"}
          className="p-2 rounded border border-gray-400"
          onChange={onPasswordChange}
          value={password}
          required
        />
        <span
          className="text-xs text-black/50 flex justify-center"
          onClick={showPassword}
        >
          {isPasswordVisible ? "Hide" : "Show"} Password
        </span>

        <input
          type="submit"
          disabled={isLoading}
          value={isLoading ? "Loading..." : "Log in"}
          className="p-3 rounded bg-indigo-600 text-white font-bold w-full cursor-pointer"
        />

        {isFailed && (
          <p className="bg-red-500/20 text-red-600 font-bold p-2 rounded flex justify-center">
            Unable to login. Please try again with other credentials
          </p>
        )}
      </form>
    </div>
  );
}
