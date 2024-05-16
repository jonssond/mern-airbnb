import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-32">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto">
          <input type="text" name="name" placeholder="your name" id="" />
          <input type="email" name="email" placeholder="your@email.com" id="" />
          <input
            type="password"
            name="password"
            placeholder="your password"
            id=""
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
            id=""
          />
          <button className="primary mt-4">Login</button>
          <div className="py-2 flex gap-2 justify-center text-gray-500">
            Already have an account yet?{" "}
            <Link className="text-primary hover:underline" to={"/login"}>
              Log in now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
