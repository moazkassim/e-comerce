import { Navigate, Outlet } from "react-router-dom";

import { useAppStore } from "../../stores/app-store";
export default function AuthRequired() {
  const userToken = useAppStore((state) => state.userToken);
  //   const isAuthenticated = false;

  return userToken ? <Outlet /> : <Navigate to={"/login"} />;
}
