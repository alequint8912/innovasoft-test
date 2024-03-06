import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

const ProtectedRoutes = ({ children }) => {
  const { getSession } = useAuth();
  const sessionStringify = getSession();
  const { token } = JSON.parse(sessionStringify ?? "{}");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
