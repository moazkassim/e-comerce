import { Navigate, Outlet } from "react-router-dom";

import { useAppStore } from "../../stores/app-store";
export default function AuthRequired() {
  const isAuthenticated: boolean = useAppStore(
    (state) => state.isAuthenticated,
  );
  //   const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
}
