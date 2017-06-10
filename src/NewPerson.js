/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import PersonModal from './PersonModal';
import * as api from './apiHelper';

class NewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      companies: []
    };
  }
  componentDidMount() {
    api.getAllCompanies().then(companies => this.setState({ companies }));
  };

  addPerson = (person) => api.addPerson(person);

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
        <div className="addBtn" onClick={this.openModal}>
          <p className="addBtnDescription">Create new person</p>
          <div className="addSymbol">+</div>
        </div>
        {this.state.showModal &&
        <PersonModal
          addPerson={this.addPerson}
          closeModal={this.closeModal}
          companies={this.state.companies}
        />}
      </div>
  )
  }
}

export default NewPerson;