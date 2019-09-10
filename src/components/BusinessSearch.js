import React, { Component } from 'react';
import * as BusinessAPI from '../network/Business';

class BusinessSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      reviews: []
    };
  }

  componentDidMount() {
    BusinessAPI.findBusinesses().then(business => {
      this.setState({ businesses: business });
    });
  }

  render() {
    const { businesses } = this.state;
    console.log(`count`, businesses && businesses.length);
    return (
      <div>
        {businesses &&
          businesses.length > 0 &&
          businesses.map(business => (
            <span key={business.id}>{business.name}</span>
          ))}
        {businesses.length === 0 && <h2>No businesses found</h2>}
      </div>
    );
  }
}
export default BusinessSearch;
