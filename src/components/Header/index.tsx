import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/redux';
import { getUser, loginUser } from 'src/redux/Slices/userSlice';

const Header = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch<AppDispatch>();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => dispatch(loginUser(tokenResponse.access_token)),
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div>
      <div>Navbar</div>
      {user ? <div>Logged in</div> : <button onClick={() => login()}>Login</button>}
    </div>
  );
};

export default Header;
