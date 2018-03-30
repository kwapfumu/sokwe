// import IbisokozoLayout from '../components/IbisokozoLayout/IbisokozoLayout';
import IbisokozoContainer from '../containers/IbisokozoContainer';
// import AddIgisokozoForm from
// '../../isokoranye/components/OngeramwoRow/AddIgisokozoForm/AddIgisokozoForm';
// import AdminEditSokozo from '../components/AdminEditSokozo/AdminEditSokozo';

const adminRoutes = [
  // {
  //  id: "admin0",
  //  path: "/users",
  //  exact: true,
  //  main: UsersList,
  // },
  // {
  //  id: "admin1",
  //  path: "/users/create",
  //  exact: true,
  //  main: AdminAddUserForm,
  // },
  // {
  //  id: "admin2",
  //  path: "/users/:userId",
  //  exact: true,
  //  main: AdminUserDetails,
  // },
  // {
  //  id: "admin3",
  //  path: "/users/:userId/edit",
  //  exact: true,
  //  main: AdminEditUser,
  // },
  {
    id: "admin4",
    path: "/ibisokozo",
    main: IbisokozoContainer,
  },
  // {
  //  id: "admin5",
  //  path: "/ibisokozo/newSokozo",
  //  exact: true,
  //  main: AddIgisokozoForm,
  // },
  // {
  //  id: "admin6",
  //  path: "/ibisokozo/:${match.params.aSokozo._id}/edit",
  //  exact: true,
  //  main: AdminEditSokozo,
  // },
  // {
  //  id: "admin7",
  //  path: "/ibisokozo/:sokozoId/delete",
  //  exact: true,
  //  main: IbisokozoLayout,
  // },
];

export default adminRoutes;
