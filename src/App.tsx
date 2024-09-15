import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './layouts/PrivateRoute';
import PublicRoute from './layouts/PublicRoute';
import routesConfig from './routes/routesConfig';
import { IRoutesConfigType } from './lib/types';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { SnackbarProvider } from 'notistack';
import { routes } from './routes/routeConstants';
import './App.css';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux';
import { fetchUser } from './redux/Slices/userSlice';
import Loader from './components/Loader';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const renderLayout = (config: IRoutesConfigType, key: string): JSX.Element => {
    switch (config.layout) {
      case 'private':
        return <Route key={key} path={config.path} element={<PrivateRoute config={config} />} />;
      case 'public':
        return <Route key={key} path={config.path} element={<PublicRoute config={config} />} />;
      default:
        return <Route key={key} path={config.path} element={<PrivateRoute config={config} />} />;
    }
  };

  const renderRoute = (config: IRoutesConfigType): JSX.Element | undefined => {
    const routeKey = config.path; // Use a unique identifier if available, or fallback to the path
    return renderLayout(config, routeKey);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        {/* <HelmetProvider> */}
        <Router>
          <Routes>
            {routesConfig().map((config) => renderRoute(config))}
            <Route path='/' element={<Navigate to={routes.HOME} replace />} />
            <Route path='*' element={<Navigate to={routes.HOME} replace />} />
          </Routes>
        </Router>
        {/* </HelmetProvider> */}
      </ThemeProvider>
    </Suspense>
  );
};

const AppWithSnackbar: React.FC = () => (
  <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <App />
  </SnackbarProvider>
);

export default AppWithSnackbar;
