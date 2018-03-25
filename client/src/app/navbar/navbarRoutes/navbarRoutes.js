import HomeLayout from '../../home/components/HomeLayout';
import AboutLayout from '../../about/components/AboutLayout';

const navbarRoutes = [
  {
    path: "/",
    exact: true,
    main: () => (<HomeLayout />),
  },
  {
    path: "/about",
    main: () => <AboutLayout />,
  },
];

export default navbarRoutes
