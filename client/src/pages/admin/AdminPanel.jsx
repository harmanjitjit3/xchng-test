import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequestsThunk } from "@/store/thunks/request.thunk";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [msg, setMsg] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { requests, loading, buttonLoading } = useSelector(
    (state) => state.requests
  );

  useEffect(() => {
    dispatch(fetchRequestsThunk());
  }, [dispatch]);

  const createAdmin = async (e) => {
    e.preventDefault();

    if (!newAdminEmail) return toast.error("Please Enter Email!");

    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!reg.test(String(newAdminEmail).toLowerCase())) {
      toast.error("Invalid Email!");
      return;
    }
  };

  return (
    <div className="space-y-6 py-4 pb-20">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <Card
        onClick={() => {
          navigate("/admin/requests");
        }}
      >
        <CardContent className="text-lg flex items-center justify-between">
          <CardTitle className="text-lg">
            Pending Requests ({requests.length})
          </CardTitle>
          <ChevronRight />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create New Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-3">
            <Input
              type="email"
              placeholder="Admin email"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              required
            />
            {/* <Input
              type="password"
              placeholder="Password"
              value={newAdmin.password}
              onChange={(e) =>
                setNewAdmin({ ...newAdmin, password: e.target.value })
              }
              required
            /> */}
            <Button onClick={createAdmin}>Add Admin</Button>
          </form>
        </CardContent>
      </Card>

      {msg && <p className="text-sm text-center text-red-500">{msg}</p>}
    </div>
  );
}
