// src/AppInitializer.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthThunk } from "@/store/thunks/user.thunk";
import LoadingScreen from "@/components/common/LoadingScreen";
import { setUser } from "@/store/slices/user.slice";

export default function AppInitializer({ children }) {
  const dispatch = useDispatch();
  const { loading, isAuthorized, userProfile } = useSelector((s) => s.auth);

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, [dispatch]);

  if (loading) return <LoadingScreen />;
  return children;
}
