import CreateAccountForm from "../components/CreateAccountForm";

export default function CreateAccount() {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center py-2">
        <a href="/">
          <img
            className="object-fill w-24"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="dev_logo"
          />
        </a>
      </div>
      <CreateAccountForm />
    </div>
  );
}
