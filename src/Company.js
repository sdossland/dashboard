/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import NewCompanyModal from './NewCompanyModal';
import ListOfPeople from './ListOfPeople';
import * as api from './apiHelper';

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      company: {},
      people: [],
      loaded: false,
      showModal: false,
      showListOfPeople: false,
      showListText: 'See people who work here'
    };
  }
  componentDidMount() {
    Promise.all([
      api.getAllCompanies(),
      api.getCompany(this.props.companyId),
      api.getPeopleOfCompany(this.props.companyId)
    ])
      .then((dataSet) => {
        const [ companies, company, people ] = dataSet;
        this.setState({ companies, company, people, loaded: true });
      });
  }
  getDeletePerson = (personId) => () =>
    api.deletePerson(personId)
      .then(() => api.getPeopleOfCompany(this.props.companyId))
      .then(people => this.setState({ people }));
  getEditPerson = (personId) => (person) =>
    api.editPerson(personId, person)
      .then(() => api.getPeopleOfCompany(this.props.companyId))
      .then(people => this.setState({ people }));
  editCompany = (company) =>
    api.editCompany(this.props.companyId, company)
      .then(() => api.getCompany(this.props.companyId))
      .then(company => this.setState({ company }));
  closeModal = (e) => {
    if (e) e.preventDefault();
    this.setState({showModal: false})
  };
  openModal = () => {
    this.setState({ showModal: true });
  };
  toggleListOfPeople = () => {
    if (!this.state.showListOfPeople) {
      this.setState({
        showListOfPeople: true,
        showListText: 'Hide list of people who work here'
      });
    } else if (this.state.showListOfPeople) {
      this.setState({
        showListOfPeople: false,
        showListText: 'See people who work here'
      });
    }
  };
  render() {
    const { company, people, loaded, showModal } = this.state;
    return loaded ? (
      <div className="companyCard">
        <p className="modal-title">{company.name}</p>
        <hr />
        <div className="companyDetails">
          <div className="row">
            <p>{company.address}</p>
          </div>
          <div className="row">
            <p className="companyDetails-subtitle">Revenue</p>
            <p className="companyDetails-input">{company.revenue}</p>
          </div>
          <div className="row">
            <p className="companyDetails-subtitle">Phone number</p>
            <p className="companyDetails-input">{company.phone}</p>
          </div>
          <p className="seePeople row" onClick={this.toggleListOfPeople}>{this.state.showListText}</p>
          {this.state.showListOfPeople && <ListOfPeople people={people} getDeletePerson={this.getDeletePerson} getEditPerson={this.getEditPerson} companies={this.state.companies} />}
        </div>
        <hr />
        <div className="editDeleteRow">
          <button className="btn" onClick={this.openModal}>Edit Company</button>
          {showModal && <NewCompanyModal closeModal={this.closeModal} company={company} editCompany={this.editCompany} />}
        </div>
      </div>
    ) : <div>LOADING...</div>
  }
}

Company.propTypes = {
  companyId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default Company;