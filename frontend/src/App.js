import React, { Component } from 'react';
// import ListingContainer from './Containters/ListingContainer'
import RealtorContainer from './Containters/RealtorContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realtors: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/realtors")
      .then(res => res.json())
      .then(realtors => this.setState({ realtors }))
  }

  deleteRealtor(realtorInfo) {
    const name = realtorInfo.name;
    fetch(`http://localhost:3000/realtors/${name}`, {
      method: 'DELETE'
    })
      .then(r => r.json)
    // .then(this.setState({ realtors: [...realtors] }))
  }

  render() {
    return (
      <div>
        < RealtorContainer realtors={this.state.realtors} handleDelete={this.deleteRealtor} />
        {/* < ListingContainer /> */}
      </div>
    )
  };
}
export default App;
