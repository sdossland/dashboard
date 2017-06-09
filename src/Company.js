/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import NewCompanyModal from './NewCompanyModal';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  closeModal = (e) => {
    if (e) e.preventDefault();
    this.setState({showModal: false})
  };
  deleteCompany = () => {
    this.props.deleteCompany();
    this.props.history.push('/company');
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  render() {
    // function onClick() {
    //   this.props.onClickHandler();
    // }
    return (
      <div className="companyCard">
        <p className="modal-title"/*onClick={this.onClick}*/>{this.props.data.companyName}</p>
        <hr />
        {/*<img />*/}
        <div className="companyDetails">
          <div className="row">
            <p>{this.props.data.companyAddress}</p>
          </div>
          <div className="row">
            <p className="companyDetails-subtitle">Revenue</p>
            <p className="companyDetails-input">{this.props.data.companyRevenue}</p>
          </div>
          <div className="row">
            <p className="companyDetails-subtitle">Phone number</p>
            <p className="companyDetails-input">{this.props.data.companyPhoneNum}</p>
          </div>
          {/*<a href="#" /*or onClick??*/ /*>See people who work here</a>*/}
        </div>
        <hr />
        <div className="editDeleteRow">
          <button className="btn" onClick={this.deleteCompany}>Delete</button>
          <button className="btn" onClick={this.openModal}>Edit</button>
          {this.state.showModal && <NewCompanyModal closeModal={this.closeModal} data={this.props.data} editCompany={this.props.editCompany} />}
          {/*<EditCompany modalTitle="Edit Company" companyName={recipe.recipeTitle} companyAddress={company.companyAddress} editCompany={handleEdit()} ></EditCompany>*/}
        </div>
      </div>
    )
  }
}

export default Company;