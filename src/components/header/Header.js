import React, { Component, Fragment } from 'react';
import css from './header.module.css';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className={css.header}>
          <h3>React Salário 💸</h3>
        </div>
      </Fragment>
    );
  }
}
