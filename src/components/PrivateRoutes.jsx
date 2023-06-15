import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ userLoggedIn }) => {
    return userLoggedIn ? <Outlet /> : <Navigate to='/Authentication/login' />;
};
export default PrivateRoutes;
