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

  deleteRealtor(e) {
    console.log(e)
    console.log(e.target)
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
