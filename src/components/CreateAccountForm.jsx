import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateAccountForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSignUp(data) {
    if (data.password != data.passwordConfirmation) {
      setError("passwordError", {
        message: "Password doesn't match password confirmation",
      });
      return;
    }

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    console.log(responseData);
    if (responseData?.err) {
      setError("root", { message: "Invalid data, change it and try again" });
    } else if (responseData?.data?._id) {
      localStorage.setItem("token", responseData?.data?._id);
      localStorage.setItem("imgProfileUser", responseData?.data?.imgprofile);
      localStorage.setItem("username", responseData?.data?.username);
      navigate("/");
    } else {
      setError("root", { message: "Invalid data, change it and try again" });
    }
  }

  return (
    <div className="size-1/2 max-w-[600px] flex flex-col border rounded-md p-4">
      <h1 className="font-bold text-xl">Create your account</h1>
      <form onSubmit={handleSubmit(onSignUp)} className="p-3">
        <h2 className="font-semibold text-md pt-3">Name *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("name", {
            required: { value: true, message: "Name required" },
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name?.message}</p>}

        <h2 className="font-semibold text-md pt-3">Username *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("username", {
            required: { value: true, message: "Username required" },
          })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username?.message}</p>
        )}

        <h2 className="font-semibold text-md pt-3">Profile image link *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("imgprofile", {
            required: { value: true, message: "Link required" },
          })}
        />

        <h2 className="font-semibold text-md pt-3">Email *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("email", {
            required: { value: true, message: "Email required" },
          })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}

        <h2 className="font-semibold text-md pt-3">Password *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("password", {
            required: { value: true, message: "Password required" },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}

        <h2 className="font-semibold text-md pt-3">Password Confirmation *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("passwordConfirmation", {
            required: {
              value: true,
              message: "Password confirmation required",
            },
          })}
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500">{errors.passwordConfirmation?.message}</p>
        )}
        {errors.passwordError && (
          <p className="text-red-500">{errors.passwordError?.message}</p>
        )}

        <input
          type="submit"
          value="Sign up"
          className="rounded py-2 bg-violet-700 w-full text-white cursor-pointer hover:bg-violet-800 mt-5"
        />
        {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
      </form>
    </div>
  );
}
