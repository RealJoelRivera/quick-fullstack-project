import React, { Component } from 'react';
import RealtorComponent from '../Components/RealtorComponent';

class RealtorContainer extends Component {

  showRealtors() {
    const realtors = this.props.realtors.map(realtor => {
      console.log(realtor)
      return <RealtorComponent
        handleDelete={this.props.handleDelete}
        realtors={this.props.realtors}
        realtor={realtor}
        key={`key-${Math.floor(Math.random() * Math.floor(10))}`}
      />
    })
    return realtors;
  }

  render() {

    return (
      <div>
        REALTORS
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