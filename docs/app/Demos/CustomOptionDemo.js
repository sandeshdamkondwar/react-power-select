import React, { Component } from 'react';
import PowerSelect from 'src/PowerSelect';
import { countries } from './constants';

const CustomOptionComponnet = ({ option }) =>
  <div>
    <img className="flag" src={option.flag} />
    {option.name} ({option.code})
  </div>;

export default class CustomOptionDemo extends Component {
  state = {
    selectedCountry: countries[4],
  };

  handleChange = ({ option }) => {
    this.setState({ selectedCountry: option });
  };

  render() {
    return (
      <div className="demo">
        <h3>Custom Option Component</h3>
        <PowerSelect
          options={countries}
          selected={this.state.selectedCountry}
          optionComponent={<CustomOptionComponnet />}
          searchIndices={['name', 'code']}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
