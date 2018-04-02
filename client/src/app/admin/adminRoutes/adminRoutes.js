import UsersContainer from '../containers/UsersContainer';
// import IbisokozoContainer from '../containers/IbisokozoContainer';
import IbisokozoLayout from '../components/IbisokozoLayout/IbisokozoLayout';
// import UrlNotFound from '../../reusableComponents/UrlNotFound/UrlNotFound';
// import AdminAddIgisokozoForm from '../components/AdminAddIgisokozoForm/AdminAddIgisokozoForm';
// import AdminEditSokozoForm from '../components/AdminEditSokozoForm/AdminEditSokozoForm';

const adminRoutes = [
  // {
  //  id: "fourth",
  //  path: "/admin",
  //  exact: true,
  //  main: IbisokozoLayout,
  // },
  {
    id: "admin1",
    path: "/users",
    main: UsersContainer,
  },
  // {
  //  id: "admin2",
  //  path: "/users/create",
  //  exact: true,
  //  main: AdminAddUserForm,
  // },
  // {
  //  id: "admin3",
  //  path: "/users/:userId",
  //  exact: true,
  //  main: AdminUserDetails,
  // },
  // {
  //  id: "admin4",
  //  path: "/users/:userId/edit",
  //  exact: true,
  //  main: AdminEditUser,
  // },
  {
    id: "admin5",
    path: "/ibisokozo",
    main: IbisokozoLayout,
  },
  // {
  //  id: "admin6",
  //  path: "/ibisokozo/newSokozo",
  //  exact: true,
  //  main: AdminAddIgisokozoForm,
  // },
  // {
  //  id: "admin7",
  //  path: "/ibisokozo/:sokozoId/edit",
  //  exact: true,
  //  main: AdminEditSokozoForm,
  // },
  // { API call => already defined in express routes
  // id: "admin8",
  //  path: "/ibisokozo/:sokozoId/delete",
  //  exact: true,
  //  main: IbisokozoContainer,
  // },
  // {
  //  id: "notFound",
  //  main: UrlNotFound,
  // },
];

export default adminRoutes;
