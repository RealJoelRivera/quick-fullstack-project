import React, { Component } from 'react';

class RealtorComponent extends Component {
  render() {
    // console.log(this.props.realtor)
    return (
      <div>
        <div>
          {this.props.realtor}<button onClick={(e) => this.props.handleDelete(e)}>Delete Realtor</button>
        </div>
      </div>
    )
  }
}
export default RealtorComponent;