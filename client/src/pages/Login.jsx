import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    const { identifier, password } = formData;
    const errors = {};
    if (!identifier) errors.identifier = "Enter username or phone.";
    if (!password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = await dispatch(logoutUserThunk());

    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      toast.error(errors.identifier || errors.password);
      return;
    }

    navigate("/app/home");

  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-6">
      <div className="w-full max-w-sm flex flex-col items-center space-y-8">
        {/* Title + Subtext */}
        <div className="text-center space-y-1">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500">
            Login to continue your journey
          </p>
        </div>

        {/* Form */}
        <form
          className="flex w-full flex-col space-y-4"
          autoComplete="on"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <Label className="text-sm text-gray-800 mb-1 px-2">
              Username or Phone
            </Label>
            <Input
              type="text"
              placeholder="Enter username or phone"
              name="identifier"
              autoComplete="username"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full !px-4 !py-5 !text-lg rounded-lg border-2 focus:border-2 !focus-visible:outline-none focus-visible:ring-0"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label className="text-sm text-gray-800 mb-1 px-2">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              className="w-full !px-4 !py-5 !text-lg rounded-lg border-2 focus:border-2 !focus-visible:outline-none focus-visible:ring-0"
              required
            />
          </div>

          <Button
            type="submit"
            className="text-lg w-full py-6 rounded-lg font-semibold transition-transform shadow-lg cursor-pointer text-white"
          >
            Login
          </Button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

// button
// className="w-full rounded-xl py-3 md:py-4 text-base md:text-lg font-semibold text-white shadow-md bg-primary hover:opacity-90 disabled:opacity-70"

// input
// className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base md:text-lg text-gray-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
