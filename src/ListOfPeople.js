/**
 * Created by sophia on 6/9/17.
 */
import React from 'react';
import PersonDetail from './PersonDetail';
import PropTypes from 'prop-types';

class ListOfPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPersonDetailKey: null
    }
  }
  setDisplayPersonDetail = (key) => () => {
    if (key === this.state.showPersonDetailKey) this.setState({ showPersonDetailKey: null });
    else this.setState({ showPersonDetailKey: key });
  };
  render() {
    const peopleList = this.props.people
      .map((person) => {
        const showPersonDetail = person._id === this.state.showPersonDetailKey;
        return (
          <div key={person._id}>
            { showPersonDetail && <hr /> }
            <p className="person" onClick={this.setDisplayPersonDetail(person._id)}>{person.name}</p>
            { showPersonDetail &&
              <PersonDetail
                person={person}
                companies={this.props.companies}
                deletePerson={this.props.getDeletePerson(person._id)}
                editPerson={this.props.getEditPerson(person._id)}
              />
            }
          </div>
        );
      });
    return (
      <div>
        <div className="peopleList">
          {peopleList}
        </div>
      </div>
    )
  }
}


ListOfPeople.propTypes = {
  companies: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  getDeletePerson: PropTypes.func.isRequired,
  getEditPerson: PropTypes.func.isRequired
};

export default ListOfPeople;