/**
 * Created by sophia on 6/9/17.
 */
import React from 'react';
import PersonModal from './PersonModal';
import PropTypes from 'prop-types';

class PersonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  closeModal = (e) => {
    if (e) e.preventDefault();
    this.setState({showModal: false})
  };
  openModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
        <div className="row row-spacing">
          <p className="personDetails-subtitle">Email</p>
          <p className="personDetails-input">{this.props.person.email}</p>
        </div>
        <div className="editDeleteRow row">
          <div className="col-xs-6 col-md-4 col-sm-offset-0 col-md-offset-2">
            <button className="btn" onClick={this.props.deletePerson}>Delete Person</button>
          </div>
          <div className="col-xs-6 col-md-4">
            <button className="btn" onClick={this.openModal}>Edit Person</button>
          </div>
          {this.state.showModal &&
            <PersonModal
              closeModal={this.closeModal}
              person={this.props.person}
              editPerson={this.props.editPerson}
              companies={this.props.companies}
            />
          }
        </div>
        <hr />
        </div>
      </div>
    )
  }
}

PersonDetail.propTypes = {
  companies: PropTypes.array.isRequired,
  deletePerson: PropTypes.func.isRequired,
  editPerson: PropTypes.func.isRequired,
  person: PropTypes.object
};

export default PersonDetail;