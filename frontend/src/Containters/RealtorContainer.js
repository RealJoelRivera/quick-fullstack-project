import React, { Component } from 'react';
import RealtorComponent from '../Components/RealtorComponent';

class RealtorContainer extends Component {

  showRealtors() {
    const realtors = this.props.realtors.map(realtor => {
      // console.log(realtor)
      return <RealtorComponent
        handleDelete={this.props.handleDelete}
        realtors={this.props.realtors}
        id={realtor.id}
        name={realtor.name}
        email={realtor.email}
        phone={realtor.phone}
        realtor={realtor}
        key={`key-${Math.floor(Math.random() * Math.floor(1000))}`}
      />
    })
    return realtors;
  }

  render() {
    return (
      <div>
        <h1>REALTORS</h1>
        {this.showRealtors()}
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" />
          </label>
          <input type="submit" value="CREATE REALTOR" />
        </form>
      </div>
    )
  }
}
export default RealtorContainer;