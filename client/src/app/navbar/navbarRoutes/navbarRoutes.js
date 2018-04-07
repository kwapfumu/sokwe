import HomeLayout from '../../home/components/HomeLayout';
import AboutLayout from '../../about/components/AboutLayout';
// import UrlNotFound from '../../reusableComponents/UrlNotFound/UrlNotFound';

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
    path: "/logout",
    exact: true,
    main: HomeLayout,
  },
  // {
  //  id: "notFound",
  //  main: UrlNotFound,
  // },
];

export default navbarRoutes;
