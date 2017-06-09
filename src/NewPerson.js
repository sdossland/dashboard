/**
 * Created by sophia on 6/7/17.
 */
import React from 'react';

class NewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  openModal = () => {
    this.setState({showModal: true});
  };
  closeModal = () => {
    this.setState({showModal: false})
  };
  closeModalWindow = (e) => {
    if (e.target.id === 'myModal') {
      this.setState({showModal: false});
    }
  };
  render() {
    var companyNames = this.props.data.map((company, key) => {
      return (
        <option key={key} /*value=""*/>{company.companyName}</option>
      )
    });

    return (
      <div>
        {/*Trigger/Open The Modal*/}
        <div className="addBtn" onClick={this.openModal}>
          <p className="addBtnDescription">Create new person</p>
          <div className="addSymbol">+</div>
        </div>
        {/* The Modal*/}
        <form id="myModal" className="modal" style={{display: this.state.showModal ? 'block' : 'none'}} /* onSubmit={this.handleSubmit} */ onClick={this.closeModalWindow}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal}>x</span>
            <p className="modal-title">New Person</p>
            <hr />
            <br />
            <div className="row">
              <p className="modal-subtitle">Name</p>
              <input type="text" placeholder="Name of person" /*value={this.state.name} onChange={this.nameChange}*/ />
            </div>
            <div className="row">
              <p className="modal-subtitle">Address</p>
              <input type="text" placeholder="Address" /*onChange={this.personAddressChange}*/ />
            </div>
            <div className="row">
              <p className="modal-subtitle">Company</p>
              <select>
                <option defaultValue="Please select...">Please select...</option>
                {companyNames}
              </select>
            </div>
            <br />
            <div>
              <button className="btn saveBtn" type="submit">Save</button>
              <button className="btn closeBtn" onClick={this.closeModal}>Close</button>
            </div>
          </div>
        </form>
      </div>
  )
  }
}

export default NewPerson;