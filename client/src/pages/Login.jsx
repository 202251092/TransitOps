import { useState } from "react";
import {
  Mail,
  Lock,
  Truck,
  MapPinned,
  BarChart3,
} from "lucide-react";
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
    <div className="relative min-h-screen overflow-hidden bg-slate-100">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-yellow-300 blur-3xl opacity-30 animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-300 blur-3xl opacity-20 animate-pulse"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      </div>

      {/* Floating Icons */}

      <Truck
        size={46}
        className="absolute left-1/3 top-20 text-yellow-500 animate-bounce"
      />

      <MapPinned
        size={42}
        className="absolute bottom-20 left-24 text-blue-500 animate-pulse"
      />

      <BarChart3
        size={42}
        className="absolute right-1/4 top-24 text-green-500 animate-bounce"
      />

      <div className="relative z-10 flex min-h-screen">

        {/* Left Side */}

        <div className="hidden lg:flex flex-1 flex-col justify-center px-20">

          <h1 className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 bg-clip-text text-7xl font-extrabold text-transparent">
            TransitOps
          </h1>

          <p className="mt-5 text-2xl text-slate-700">
            Smart Transport Operations Platform
          </p>

          <div className="mt-12 space-y-5 text-lg text-slate-600">

            <div>🚚 Fleet Management</div>

            <div>📍 Real-time Trip Monitoring</div>

            <div>👨‍✈️ Driver & Vehicle Management</div>

            <div>⛽ Fuel & Expense Tracking</div>

            <div>📊 Fleet Analytics Dashboard</div>

            <div>🔧 Maintenance Scheduling</div>

          </div>

        </div>

        {/* Login Card */}

        <div className="flex flex-1 items-center justify-center p-8">

          <div className="w-full max-w-md rounded-3xl border border-white/40 bg-white/90 p-10 shadow-2xl backdrop-blur-xl">

            <div className="mb-8 text-center">

              <h2 className="text-4xl font-extrabold text-slate-800">
                Welcome
              </h2>

              <p className="mt-2 text-slate-500">
                Sign in to continue
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label className="text-sm font-medium">
                  Email
                </label>

                <div className="mt-2 flex items-center rounded-xl border bg-white px-4">

                  <Mail
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent p-3 outline-none"
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

                <div className="mt-2 flex items-center rounded-xl border bg-white px-4">

                  <Lock
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full bg-transparent p-3 outline-none"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />

                </div>

              </div>

              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-yellow-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-yellow-600"
              >
                Login
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
              TransitOps © 2026
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}