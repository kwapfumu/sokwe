import HomeLayout from '../../home/components/HomeLayout';
import AboutLayout from '../../about/components/AboutLayout';
import LoginForm from '../../loginNsignup/components/LoginForm/LoginForm';
import AdminLayout from '../../admin/components/AdminLayout/AdminLayout';
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
    id: "third",
    path: "/logout",
    exact: true,
    main: HomeLayout,
  },
  {
    id: "fourth",
    path: "/admin",
    main: AdminLayout,
  },
  {
    id: "notFound",
    main: UrlNotFound,
  },
];

export default navbarRoutes;
