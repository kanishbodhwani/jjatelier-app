import { Navigate } from "react-router-dom";

// This file is just for redirecting to the HomePage component
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;