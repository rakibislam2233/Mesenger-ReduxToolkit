import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [register, { data, isLoading, error }] = useRegisterMutation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError("");
    register({ name, email, password });
  };
  useEffect(() => {
    if (error) {
      setIsError(error);
    } else if (data?.accessToken && data?.user) {
      navigate("/inbox");
    }
  }, [data, error, navigate]);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto border rounded p-5">
        <h1 className="text-3xl font-semibold text-center">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-3 mt-5">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              id="name"
              className="w-full px-3 py-1 border focus:outline-none focus:border-pink-500 rounded"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              required
              className="w-full px-3 py-1 border focus:outline-none focus:border-pink-500 rounded"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              required
              className="w-full px-3 py-1 border focus:outline-none focus:border-pink-500 rounded"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={isLoading}
              className="px-8 py-1 rounded bg-pink-500 text-white"
            >
              Continue
            </button>
          </div>
        </form>
        {
          isError && <h1 className="bg-red-600 mt-5 text-center text-white">{isError?.data}</h1>
        }
        <div className="mt-5">
          <h1 className="text-center">
            Already you have account? <Link to={"/"}>login</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
