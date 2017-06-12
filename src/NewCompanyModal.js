/**
 * Created by sophia on 6/8/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  address: '',
  revenue: '',
  phone: ''
};

class NewCompanyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.company ? props.company : Object.assign({}, initialState);
  }
  onSave = (e) => {
    e.preventDefault();
    const handler = this.props.addCompany || this.props.editCompany;
    console.log(handler);
    handler(this.state).then(() => {
      this.setState(initialState);
      this.props.closeModal();
    })
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
          <p className="modal-title">{ this.props.editCompany ? 'Edit Company' : 'New Company' }</p>
          <hr />
          <br />
          <div className="row row-spacing">
            <p className="modal-subtitle col-md-4">Name</p>
            <div className="col-md-8">
              <input type="text" placeholder="Name of company" value={this.state.name} onChange={this.getOnChange('name')} />
            </div>
          </div>
          <div className="row row-spacing">
            <p className="modal-subtitle col-md-4">Address</p>
            <div className="col-md-8">
              <input type="text" placeholder="Address" value={this.state.address} onChange={this.getOnChange('address')} />
            </div>
          </div>
          <div className="row row-spacing">
            <p className="modal-subtitle col-md-4">Revenue</p>
            <div className="col-md-8">
              <input type="text" placeholder="Revenue" value={this.state.revenue} onChange={this.getOnChange('revenue')} />
            </div>
          </div>
          <div className="row row-spacing">
            <p className="modal-subtitle col-md-4">Phone number</p>
            <div className="col-md-8">
              <input type="tel" pattern="\d{3}[\-]\d{3}[\-]\d{4}" placeholder="###-###-####" value={this.state.phone} onChange={this.getOnChange('phone')} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-6 col-md-2">
              <button className="btn saveBtn" onClick={this.onSave}>Save</button>
            </div>
            <div className="col-sm-6 col-md-2">
              <button className="btn closeBtn" onClick={this.props.closeModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewCompanyModal.propTypes = {
  company: PropTypes.object,
  editCompany: PropTypes.func,
  addCompany: PropTypes.func,
  closeModal: PropTypes.func.isRequired
};

export default NewCompanyModal;