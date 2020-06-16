import React, { Component, Fragment } from 'react';
import Header from './components/header/Header';
import InputSalary from './components/inputs/InputSalary';
import InputReadOnly from './components/inputs/InputReadOnly';
import css from './app.module.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salary: 0,
    };
  }

  componentDidMount() {}

  handleChange = (newValue) => {
    // console.log(newValue);
    this.setState({
      salary: newValue,
    });
  };

  render() {
    const { salary } = this.state;
    return (
      <Fragment>
        <div className="container">
          <div className={css.border}>
            <Header />
            <InputSalary value={salary} onSalary={this.handleChange} />
            <InputReadOnly value={salary} />
          </div>
        </div>
      </Fragment>
    );
  }
}
