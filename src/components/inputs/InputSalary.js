import React, { Component, Fragment } from 'react';

export default class InputSalary extends Component {
  handleChange = (event) => {
    const newValue = event.target.value;
    this.props.onSalary(newValue);
  };
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="salary"
              type="number"
              className="active"
              autoFocus
              onChange={this.handleChange}
            />
            <label htmlFor="salary">Salário Bruto</label>
          </div>
        </div>
      </Fragment>
    );
  }
}
