import HomeLayout from '../../home/components/HomeLayout';
import AboutLayout from '../../about/components/AboutLayout';
import LoginForm from '../../loginNsignup/components/LoginForm/LoginForm';
import UrlNotFound from '../../reusableComponents/UrlNotFound/UrlNotFound';

const navbarRoutes = [
  {
    id: "zero",
    path: "/",
    exact: true,
    main: HomeLayout,
  },
  {
    id: "first",
    path: "/about",
    exact: true,
    main: AboutLayout,
  },
  {
    id: "second",
    path: "/login",
    exact: true,
    main: LoginForm,
  },
  {
    id: "notFound",
    main: UrlNotFound,
  },
];

export default navbarRoutes;
