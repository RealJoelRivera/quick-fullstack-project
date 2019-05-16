import React, { Component } from 'react';

class RealtorComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.name}</h2><h4>{this.props.email}</h4><h4>{this.props.phone}</h4><button onClick={() => this.props.handleDelete(this.props.realtor)}>Delete Realtor</button>
        </div>
      </div >
    )
  }
}
export default RealtorComponent;