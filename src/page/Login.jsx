import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    console.log(user);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto border rounded p-5">
        <h1 className="text-3xl font-semibold text-center">Login </h1>
        <form onSubmit={handleSubmit} className="space-y-3 mt-5">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
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
              className="w-full px-3 py-1 border focus:outline-none focus:border-pink-500 rounded"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-8 py-1 rounded bg-pink-500 text-white"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-5">
          <h1 className="text-center">
            Do you have no account? <Link to={"/register"}>register</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
