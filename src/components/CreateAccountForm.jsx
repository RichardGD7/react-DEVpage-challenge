import { useForm } from "react-hook-form";

export default function CreateAccountForm() {
  const { register } = useForm();
  async function onSignUp() {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div className="size-1/2 max-w-[600px] flex flex-col border rounded-md p-4">
      <h1 className="font-bold text-xl">Create your account</h1>
      <form onSubmit={handleSubmit(onSignUp)} className="p-3">
        <h2 className="font-semibold text-lg py-2">Name *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("name", {
            required: { value: true, message: "Name required" },
          })}
        />

        <h2 className="font-semibold text-lg py-2">Username *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("username", {
            required: { value: true, message: "Username required" },
          })}
        />

        <h2 className="font-semibold text-lg py-2">Email *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("email", {
            required: { value: true, message: "Email required" },
          })}
        />

        <h2 className="font-semibold text-lg py-2">Password *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("password", {
            required: { value: true, message: "Password required" },
          })}
        />

        <h2 className="font-semibold text-lg py-2">Password Confirmation *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full mb-6"
          type="text"
          {...register("passwordConfirmation", {
            required: {
              value: true,
              message: "Password confirmation required",
            },
          })}
        />

        <input
          type="submit"
          value="Sign up"
          className="rounded py-2 bg-violet-700 w-full text-white cursor-pointer hover:bg-violet-800"
        />
      </form>
    </div>
  );
}
