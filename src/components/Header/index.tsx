import logo from '../../Assets/logo/Nomad-edited.png';
import { Link } from 'react-router-dom';
import './style.css';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/redux';
import { getUserDetails, loginUser, logoutUser } from 'src/redux/Slices/userSlice';
import { navRoutes } from 'src/lib/constants';
import LoadingButton from 'src/sharedComponents/LoadingButton';

const Header = () => {
  const { isLoading: isUserLoading, data: user } = useSelector(getUserDetails);
  const dispatch = useDispatch<AppDispatch>();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => dispatch(loginUser(tokenResponse.access_token)),
    onError: (errorResponse) => console.log(errorResponse),
  });

  const logout = () => {
    googleLogout();
    dispatch(logoutUser());
  };

  return (
    <header className='flex glass flex-wrap md:justify-start md:flex-nowrap z-50 w-[98%]  mx-auto mt-3'>
      <nav className='relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto'>
        <div className='logo md:col-span-3 flex align-center'>
          <Link
            to='/home'
            className='flex-none justify-center rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80'
            aria-label='Preline'
          >
            <img src={logo} alt='' className='h-[60px] w-[60px]' />
          </Link>
        </div>

        <div className='flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3'>
          <LoadingButton
            label={isUserLoading ? 'Loading...' : user ? 'Logout' : 'Sign in'}
            type='button'
            className='py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black ß disabled:opacity-50 disabled:pointer-events-none'
            loading={isUserLoading}
            onClick={() => (user ? logout() : login())}
          />

          <div className='md:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
              id='hs-navbar-hcail-collapse'
              aria-expanded='false'
              aria-controls='hs-navbar-hcail'
              aria-label='Toggle navigation'
              data-hs-collapse='#hs-navbar-hcail'
            >
              <svg
                className='hs-collapse-open:hidden shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='3' x2='21' y1='6' y2='6' />
                <line x1='3' x2='21' y1='12' y2='12' />
                <line x1='3' x2='21' y1='18' y2='18' />
              </svg>
              <svg
                className='hs-collapse-open:block hidden shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
        </div>

        <div
          id='hs-navbar-hcail'
          className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6'
          aria-labelledby='hs-navbar-hcail-collapse'
        >
          <div className='flex sm:mb-20px flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0'>
            {navRoutes.map((route) => (
              <Link
                key={route.id}
                to={route.path}
                className='inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600'
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
