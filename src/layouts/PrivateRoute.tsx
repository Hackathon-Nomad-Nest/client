import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import { IRoutesConfigType } from 'src/lib/types';
import { RootState } from 'src/redux';
import { routes } from 'src/routes/routeConstants';

const PrivateRoute = ({ config }: { config: IRoutesConfigType }) => {
  const { component: Component, isHeader = true, isFooter = true } = config;

  const userId = useSelector((state: RootState) => state.user?.data?.id);
  const isAuthenticated = () => {
    return !!userId;
  };
  // If the user is authenticated, render the component
  // Otherwise, redirect to the home page
  return isAuthenticated() ? (
    <>
      {isHeader ? <Header /> : null}
      <Component />
      {isFooter ? <Footer /> : null}
    </>
  ) : (
    <Navigate to={routes.HOME} replace />
  );
};

export default PrivateRoute;
