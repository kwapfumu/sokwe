import HomeLayout from '../../home/components/HomeLayout';
import AboutLayout from '../../about/components/AboutLayout';
import IsokoranyeLayout from '../../isokoranyeHome/components/IsokoranyeLayoutt/IsokoranyeLayout';

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
  {
    id: "third",
    path: "/isokoranye",
    exact: true,
    main: IsokoranyeLayout,
  },
  // {
  //  id: "notFound",
  //  main: UrlNotFound,
  // },
];

export default navbarRoutes;
