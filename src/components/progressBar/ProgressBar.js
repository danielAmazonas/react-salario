import React, { Component, Fragment } from 'react';

export default class ProgressBar extends Component {
  render() {
    const {
      value1,
      value2,
      value3,
      color1 = '#eee',
      color2 = '#eee',
      color3 = '#eee',
    } = this.props;
    return (
      <Fragment>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            border: '2px solid #eee',
          }}
        >
          <div
            style={{
              width: value1 + '%',
              height: '35px',
              backgroundColor: color1,
            }}
          />
          <div
            style={{
              width: value2 + '%',
              height: '35px',
              backgroundColor: color2,
            }}
          />
          <div
            style={{
              width: value3 + '%',
              height: '35px',
              backgroundColor: color3,
            }}
          />
        </div>
      </Fragment>
    );
  }
}
