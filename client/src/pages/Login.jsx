import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { login } from "../firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    try {
      await login(email, password);

      navigate("/");
    } catch (err) {
      setError("Invalid email or password.");
      console.error(err);
    }
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          TransitOps
        </h1>

        <p className="text-slate-500 mt-2">
          Fleet Management System
        </p>
      </div>

      <form
        className="space-y-5"
        onSubmit={handleSubmit}
      >

        <div>

          <label className="text-sm font-medium">
            Email
          </label>

          <div className="mt-2 flex items-center rounded-lg border px-3">

            <Mail
              size={18}
              className="text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-3 outline-none"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

        </div>

        <div>

          <label className="text-sm font-medium">
            Password
          </label>

          <div className="mt-2 flex items-center rounded-lg border px-3">

            <Lock
              size={18}
              className="text-gray-400"
            />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 outline-none"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>

        </div>

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-500 py-3 text-white font-semibold hover:bg-yellow-600"
        >
          Login
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        TransitOps © 2026
      </p>

    </div>
  );
}