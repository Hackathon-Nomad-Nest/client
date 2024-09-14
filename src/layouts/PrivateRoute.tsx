import { Navigate } from 'react-router-dom';
import { routes } from 'src/routes/routeConstants';

// This is a placeholder function for your actual authentication check
const isAuthenticated = () => {
  return true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ component: Component }: any) => {
  // If the user is authenticated, render the component
  // Otherwise, redirect to the login page
  return isAuthenticated() ? <Component /> : <Navigate to={routes.LOGIN} replace />;
};

export default PrivateRoute;
