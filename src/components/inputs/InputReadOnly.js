import React, { Component, Fragment } from 'react';
import { calculateSalaryFrom } from '../../helpers/salary';
import { formatNumber } from '../../helpers/formatHelpers';
import css from './inputReadOnly.module.css';
import ProgressBar from '../progressBar/ProgressBar';

export default class InputReadOnly extends Component {
  render() {
    let obj = calculateSalaryFrom(this.props.value);
    let temp = Object.values(obj);
    return (
      <Fragment>
        <div className="row">
          <div className="input-field col s12 m3">
            <input
              id="inss"
              type="text"
              disabled
              value={formatNumber(this.props.value)}
              className={css.inss}
            />
            <label htmlFor="inss">Base INSS</label>
          </div>
          <div className="input-field col s12 m3">
            <input
              id="desInss"
              type="text"
              disabled
              value={`${formatNumber(temp[1])} (${
                temp[0] !== 0 ? ((temp[1] * 100) / temp[0]).toFixed(2) : 0
              }%)`}
              className={css.desInss}
            />
            <label htmlFor="desInss">Desconto INSS</label>
          </div>
          <div className="input-field col s12 m3">
            <input
              id="irpf"
              type="text"
              disabled
              value={formatNumber(temp[2])}
              className={css.irpf}
            />
            <label htmlFor="irpf">Base IRPF</label>
          </div>
          <div className="input-field col s12 m3">
            <input
              id="desIrpf"
              type="text"
              disabled
              value={`${formatNumber(temp[3])} (${
                temp[0] !== 0 ? ((temp[3] * 100) / temp[0]).toFixed(2) : 0
              }%)`}
              className={css.desIrpf}
            />
            <label htmlFor="desIrpf">Desconto IRPF</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m3">
            <input
              id="salaryFinal"
              type="text"
              disabled
              value={`${formatNumber(temp[4])} (${
                temp[0] !== 0 ? ((temp[4] * 100) / temp[0]).toFixed(2) : 0
              }%)`}
              className={css.salaryFinal}
            />
            <label htmlFor="salaryFinal">Salário Líquido</label>
          </div>
        </div>
        <div className="row">
          <ProgressBar
            value1={temp[1]}
            value2={temp[3]}
            value3={temp[4]}
            color1={'#e67e22'}
            color2={'#c0392b'}
            color3={'#16a085'}
          />
        </div>
      </Fragment>
    );
  }
}
