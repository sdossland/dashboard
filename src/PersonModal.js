/**
 * Created by sophia on 6/9/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  email: '',
  companyId: ''
};

class PersonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.person ? props.person : Object.assign({}, initialState);
  }
  handleOutsideClick = (e) => {
    e.preventDefault();
    if (e.target.id === 'personModal') {
      this.props.closeModal();
    }
  };
  getOnChange = (key) => (e) => this.setState({ [key]: e.target.value });
  onSave = () => {
    const handler = this.props.addPerson || this.props.editPerson;
    handler(this.state).then(() => {
      this.setState(initialState);
      this.props.closeModal();
      window.location.reload();
    });
  };
  render() {
    var companyNames = this.props.companies.map((company) => {
      return (
        <option key={company._id} value={company._id}>{company.name}</option>
      )
    });
    console.log(this.props.person);
    return (
    <div id="personModal" className="modal" onClick={this.handleOutsideClick}>
      <div className="modal-content">
        <span className="close" onClick={this.props.closeModal}>x</span>
        <p className="modal-title">{ this.props.editPerson ? 'Edit Person' : 'New Person' }</p>
        <hr />
        <br />
        <div className="row-spacing">
          <p className="modal-subtitle">Name</p>
          <input type="text" placeholder="Name of person" value={this.state.name} onChange={this.getOnChange('name')} />
        </div>
        <div className="row-spacing">
          <p className="modal-subtitle">Email</p>
          <input type="text" placeholder="Email" value={this.state.email} onChange={this.getOnChange('email')} />
        </div>
        <div className="row-spacing">
          <p className="modal-subtitle">Company</p>
          <select defaultValue={this.props.person ? this.props.person.companyId : undefined} onChange={this.getOnChange('companyId')}>
            <option defaultValue="Please select...">Please select...</option>
            {companyNames}
          </select>
        </div>
        <br />
        <div>
          <button className="btn saveBtn" onClick={this.onSave}>Save</button>
          <button className="btn closeBtn" onClick={this.props.closeModal}>Close</button>
        </div>
      </div>
    </div>
    )
  }
}

PersonModal.propTypes = {
  companies: PropTypes.array
};

export default PersonModal;