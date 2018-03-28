import IbisokozoLayout from '../components/IbisokozoLayout/IbisokozoLayout';
// import IbisokozoContainer from '../containers/IbisokozoContainer';
// import AddIgisokozoForm from
// '../../isokoranye/components/OngeramwoRow/AddIgisokozoForm/AddIgisokozoForm';
// import AdminEditSokozo from '../components/AdminEditSokozo/AdminEditSokozo';

const adminRoutes = [
  // {
  //  id: "admin0",
  //  path: "/admin/users",
  //  exact: true,
  //  main: UsersList,
  // },
  // {
  //  id: "admin1",
  //  path: "/admin/users/create",
  //  exact: true,
  //  main: AdminAddUserForm,
  // },
  // {
  //  id: "admin2",
  //  path: "/admin/users/:userId",
  //  exact: true,
  //  main: AdminUserDetails,
  // },
  // {
  //  id: "admin3",
  //  path: "/admin/users/:userId/edit",
  //  exact: true,
  //  main: AdminEditUser,
  // },
  {
    id: "admin4",
    path: "/admin/ibisokozo",
    main: IbisokozoLayout,
  },
  // {
  //  id: "admin5",
  //  path: "/admin/ibisokozo/newSokozo",
  //  exact: true,
  //  main: AddIgisokozoForm,
  // },
  // {
  //  id: "admin6",
  //  path: "/admin/ibisokozo/:${match.params.aSokozo._id}/edit",
  //  exact: true,
  //  main: AdminEditSokozo,
  // },
  // {
  //  id: "admin7",
  //  path: "/admin/ibisokozo/:sokozoId/delete",
  //  exact: true,
  //  main: IbisokozoLayout,
  // },
];

export default adminRoutes;
