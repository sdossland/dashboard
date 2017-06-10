/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import NewCompanyModal from './NewCompanyModal';
import * as api from './apiHelper';

class NewCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      company: {}
    };
  }
  openModal = () => {
    this.setState({showModal: true});
  };
  closeModal = (e) => {
    if (e) e.preventDefault();
    this.setState({showModal: false})
  };

  addCompany = (company) => api.addCompany(company);

  render() {
    return (
      <div>
        <div className="addBtn newCompanyBtn" onClick={this.openModal}>
          <p className="addBtnDescription">Create new company</p>
          <div className="addSymbol">+</div>
        </div>
        {this.state.showModal && <NewCompanyModal addCompany={this.addCompany} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default NewCompany;