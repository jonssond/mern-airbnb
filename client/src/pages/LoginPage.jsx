import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", formData, { withCredentials: true });
      alert("Login succesful");
      setRedirect(true);
    } catch (e) {
      alert("Something went wrong. Please try again.");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={loginUser}>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            id=""
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            id=""
            value={formData.password}
            onChange={handleChange}
          />
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
