import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" name="email" placeholder="your@email.com" id="" />
          <input type="password" name="password" placeholder="password" id="" />
          <button className="primary mt-4">Login</button>
          <div className="py-2 flex gap-2 justify-center text-gray-500">
            Don&apos;t have an account yet?{" "}
            <Link
              className="text-primary hover:underline"
              to={"/user/register"}
            >
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
