import React, { Component, PropTypes } from 'react';
import AnyLoggedInUserLayout from '../../anyLoggedInUser/components/AnyLoggedInUserLayout';
import AdminLayout from '../../admin/components/AdminLayout/AdminLayout';
import HomeLayout from '../../home/components/HomeLayout';
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

  openEditTaskForm(aTaskId) {
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
    } else {
      return (
        <HomeLayout />
      );
    }
  }
}

ContentDisplayArea.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ContentDisplayArea;
