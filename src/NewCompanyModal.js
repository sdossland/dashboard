/**
 * Created by sophia on 6/8/17.
 */
import React from 'react';

const initialState = {
  companyName: '',
  companyAddress: '',
  companyRevenue: '',
  companyPhoneNum: ''
};

class NewCompanyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.data ? props.data : Object.assign({}, initialState);
  }
  onSave = (e) => {
    e.preventDefault();
    if (this.props.addCompany) {
      this.props.addCompany(this.state, () => {
        this.setState(initialState);
        this.props.closeModal();
      });
    } else if (this.props.editCompany) {
      this.props.editCompany(this.state, () => {
        this.setState(initialState);
        this.props.closeModal();
      });
    }
  };
  getOnChange = (key) => (e) => this.setState({ [key]: e.target.value });
  handleOutsideClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'newCompanyModal') {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div id="newCompanyModal" className="modal" onClick={this.handleOutsideClick}>
        <div className="modal-content">
          <span className="close" onClick={this.props.closeModal}>x</span>
          <p className="modal-title">New Company</p>
          <hr />
          <br />
          <div className="row">
            <p className="modal-subtitle">Name</p>
            <input type="text" placeholder="Name of company" value={this.state.companyName} onChange={this.getOnChange('companyName')} />
          </div>
          <div className="row">
            <p className="modal-subtitle">Address</p>
            <input type="text" placeholder="Address" value={this.state.companyAddress} onChange={this.getOnChange('companyAddress')} />
          </div>
          <div className="row">
            <p className="modal-subtitle">Revenue</p>
            <input type="text" placeholder="Revenue" value={this.state.companyRevenue} onChange={this.getOnChange('companyRevenue')} />
          </div>
          <div className="row">
            <p className="modal-subtitle">Phone number</p>
            <input type="tel" pattern="[\(]\d{3}[\)]\d{3}[\-]\d{4}" placeholder="(###)###-####" value={this.state.companyPhoneNum} onChange={this.getOnChange('companyPhoneNum')} />
          </div>
          <br />
          <div>
            <button className="btn saveBtn" onClick={this.onSave}>Save</button>
            <button className="btn closeBtn" onClick={this.props.closeModal}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCompanyModal;