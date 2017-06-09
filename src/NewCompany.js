/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import NewCompanyModal from './NewCompanyModal';

class NewCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  openModal = () => {
    this.setState({showModal: true});
  };
  closeModal = (e) => {
    if (e) e.preventDefault();
    this.setState({showModal: false})
  };
  render() {
    return (
      <div>
        <div className="addBtn newCompanyBtn" onClick={this.openModal}>
          <p className="addBtnDescription">Create new company</p>
          <div className="addSymbol">+</div>
        </div>
        {this.state.showModal && <NewCompanyModal addCompany={this.props.addCompany} closeModal={this.closeModal} />}
      </div>
    );
  }
}

export default NewCompany;