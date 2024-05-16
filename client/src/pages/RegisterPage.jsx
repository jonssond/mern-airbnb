import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    axios.get("/test");
  };

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-32">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            name="name"
            placeholder="your name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="your password"
            id="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
            id="confirmPassword"
            autoComplete="off"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button className="primary mt-4">Register</button>
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
