// import * as React from 'react';
import logo from '../../Assets/logo/dark.png'
import { Link } from 'react-router-dom';
import './style.css'
// import { useGoogleLogin } from '@react-oauth/google';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from 'src/redux';
// import { getUser, loginUser } from 'src/redux/Slices/userSlice';

const Header = () => {
  // const user = useSelector(getUser);
  // const dispatch = useDispatch<AppDispatch>();

  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => dispatch(loginUser(tokenResponse.access_token)),
  //   onError: (errorResponse) => console.log(errorResponse),
  // });
  const theme: string = 'dark';
  const navRoutes = [
    { path: '', label: 'Plans' },
    { path: '', label: 'About' },
    { path: '', label: 'Support' },
  ]

  return (<>
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto">
        <div className="logo md:col-span-3">
          {/* <!-- Logo --> */}
          <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../templates/creative-agency/index.html" aria-label="Preline">
            <img src={logo} alt='' style={{ width: '120px', height: '120px' }} />
          </a>
          {/* <!-- End Logo --> */}
        </div>

        {/* <!-- Button Group --> */}
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
            Sign in
          </button>

          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-hcail-collapse" aria-expanded="false" aria-controls="hs-navbar-hcail" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-hcail">
              <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
              <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
        {/* <!-- End Button Group --> */}

        {/* <!-- Collapse --> */}
        <div id="hs-navbar-hcail" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6" aria-labelledby="hs-navbar-hcail-collapse">
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            {
              navRoutes.map((route, index) => (
                <Link key={index} to={route.path} className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600">
                  {route.label}
                </Link>
              ))

            }
          </div>
        </div>
        {/* <!-- End Collapse --> */}
      </nav>
    </header>

    {/* section */}

  </>
  );
}


export default Header;
