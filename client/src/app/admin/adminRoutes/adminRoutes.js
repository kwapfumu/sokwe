import IbisokozoLayout from '../components/IbisokozoLayout/IbisokozoLayout';
// import AddIgisokozoForm from
// '../../isokoranye/components/OngeramwoRow/AddIgisokozoForm/AddIgisokozoForm';
import AdminEditSokozo from '../components/AdminEditSokozo/AdminEditSokozo';

const adminRoutes = [
  {
    id: "admin0",
    path: "/admin/ibisokozo",
    exact: true,
    main: IbisokozoLayout,
  },
  // {
  //  id: "admin1",
  //  path: "/admin/ibisokozo/newSokozo",
  //  exact: true,
  //  main: AddIgisokozoForm,
  // },
  {
    id: "admin2",
    path: "/admin/ibisokozo/:sokozoId/edit",
    exact: true,
    main: AdminEditSokozo,
  },
  {
    id: "admin3",
    path: "/admin/ibisokozo/:sokozoId/delete",
    exact: true,
    main: IbisokozoLayout,
  },
];

export default adminRoutes;
