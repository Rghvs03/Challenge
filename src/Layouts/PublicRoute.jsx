/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  let { user } = useSelector((state) => state.auth);

  if (user) {
    <Navigate to={"/home"} />;
  }

  return <Outlet />;
};

export default PublicRoute;
