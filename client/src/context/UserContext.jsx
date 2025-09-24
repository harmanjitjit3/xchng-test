import React, { createContext, useContext, useState, useEffect } from "react";
import { API } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // ✅ Signup
  const signup = async (formData) => {
    try {
      setLoading(true);
      const res = await API.post("/signup", formData);

      if (res.data.success) {
        toast.success(res.data.message || "Signup successful!");
        setUser(res.data.user);

        if (res.data.user.status === "pending") {
          navigate("/pending-approval");
        } else {
          navigate("/app/home");
        }
      } else {
        toast.error(res.data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("❌ Signup Error:", err);
      toast.error(err.response?.data?.message || err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Login
  const login = async (formData) => {
    try {
      setLoading(true);
      const res = await API.post("/login", formData);

      if (res.data.success) {
        toast.success(res.data.message || "Login successful!");
        setUser(res.data.user);

        if (res.data.user?.status === "pending") {
          navigate("/pending-approval");
        } else {
          navigate("/app/home");
        }
      } else {
        toast.error(res.data.message || "Login failed!");
      }
    } catch (err) {
      console.error("🚨 Login error:", err);
      toast.error(err.response?.data?.message || err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout
  const logout = async () => {
    try {
      setLoading(true);
      const res = await API.post("/logout");

      if (res.data.success) {
        toast.success(res.data.message || "Logged out successfully!");
      }
      setUser(null);
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("🚨 Logout Error:", err);
      toast.error(err.response?.data?.message || err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
