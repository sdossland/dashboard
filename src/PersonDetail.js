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
      <div>
        <div className="row">
          <p className="personDetails-subtitle">Email</p>
          <p className="personDetails-input">{this.props.person.email}</p>
        </div>
        <div className="editDeleteRow">
          <button className="btn" onClick={this.props.deletePerson}>Delete Person</button>
          <button className="btn" onClick={this.openModal}>Edit Person</button>
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