import { useNavigate } from "react-router-dom";

export default function NewUser() {
  const navigate = useNavigate();

  return (
    <div className="p-5 w-full flex flex-col items-center">
      <img
        className="object-fill w-16 cursor-pointer"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        alt="dev_logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <p className="font-bold text-3xl p-3">Join the DEV Community</p>

      <ul className="flex flex-col gap-3 w-fit">
        <li className=" text-gray-600 p-3 items-center">
          DEV Community is a community of 1,227,584 amazing developers
        </li>
        <li>
          <a
            className="flex flex-row justify-center items-center p-3 gap-2 rounded-md border  hover:bg-gray-100  font-semibold"
            href="https://appleid.apple.com/auth/authorize?client_id=to.dev&nonce=82cuLBo0xmqwhWT9vCW9TA&redirect_uri=https%3A%2F%2Fdev.to%2Fusers%2Fauth%2Fapple%2Fcallback&response_mode=form_post&response_type=code&scope=email+name&state=2ff5e4468ebe2fc03d5048fdca321809da8755db3c6af6a2"
          >
            <img src="apple.png" alt="apple icon" className="max-w-7" />
            Sign up with Apple
          </a>
        </li>

        <li>
          <a
            className="flex flex-row justify-center items-center p-3 gap-2 rounded-md border  hover:bg-gray-100  font-semibold"
            href="https://account.forem.com/users/sign_in"
          >
            <img src="circle-p.png" alt="forem-icon" className="max-w-7" />
            Sign up with Forem
          </a>
        </li>
        <li>
          <a
            className="flex flex-row justify-center items-center p-3 gap-2 rounded-md border  hover:bg-gray-100  font-semibold"
            href="https://github.com/login/oauth/authorize?client_id=d7251d40ac9298bdd9fe&redirect_uri=https%3A%2F%2Fdev.to%2Fusers%2Fauth%2Fgithub%2Fcallback&response_type=code&scope=user%3Aemail&state=ad4c914afdbcaf2fa8399d2be42e6a4040ca7ede17a972ed"
          >
            <img src="github.png" alt="github-icon" className="max-w-7" />
            Sign up with GitHub
          </a>
        </li>
        <li>
          <a
            className="flex flex-row justify-center items-center p-3 gap-2 rounded-md border  hover:bg-gray-100  font-semibold"
            href="https://api.twitter.com/oauth/authenticate?oauth_token=p_LfPgAAAAAAa8cGAAABjQn0EHo"
          >
            <img src="twt.png" alt="twitter-icon" className="max-w-7" />
            Sign up with Twitter
          </a>
        </li>
        <li>
          <a
            className="flex flex-row justify-center items-center p-3 gap-2 rounded-md border  hover:bg-gray-100  font-semibold"
            onClick={() => {
              navigate("/new-user/form");
            }}
          >
            <img src="envelope.png" alt="email-logo" className="max-w-7" />
            Sign up with Email
          </a>
        </li>
      </ul>
      <p className="text-sm text-gray-600 p-3">
        By signing up, you are agreeing to our privacy policy, terms of use and
        code of conduct.
      </p>
      <p className="pt-2">Already have an account? Log in</p>
    </div>
  );
}
