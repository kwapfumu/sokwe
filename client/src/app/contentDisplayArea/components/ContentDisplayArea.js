import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnyLoggedInUserLayout from '../../anyLoggedInUser/components/AnyLoggedInUserLayout';
import AdminLayout from '../../admin/components/AdminLayout/AdminLayout';
// import HomeLayout from '../../home/components/HomeLayout';
// import AboutLayout from '../../about/components/AboutLayout';
import navbarRoutes from '../../navbar/navbarRoutes/navbarRoutes';


// renders either HomeLayout or AdminLayout or any loggedin user component
class ContentDisplayArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  closeTaskForm() {
    this.setState({ showModal: false });
  }

  openAddTaskForm() {
    this.setState({ showModal: true });
  }

  openEditTaskForm() {
    this.setState({ showModal: true });
  }

  render() {
    if (this.props.isLoggedIn === true && this.props.isAdmin === false) {
      return (
        <AnyLoggedInUserLayout />
      );
    } else if (this.props.isLoggedIn === true && this.props.isAdmin === true) {
      return (
        <AdminLayout
          showModal={this.state.showModal}
          openAdminAddTaskFormModal={this.openAddTaskForm}
          openAdminEditTaskFormModal={this.openEditTaskForm}
          closeAdminTaskFormModal={this.closeTaskForm}
        />
      );
    }
    return (
      <div>
        {navbarRoutes.map((route, id) => (
          // eslint-disable-next-line react/no-array-index-key
          <Route key={id} path={route.path} exact={route.exact} component={route.main} />
        ))}
      </div>
    );
  }
}

ContentDisplayArea.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ContentDisplayArea;
