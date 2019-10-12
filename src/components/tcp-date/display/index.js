/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

function _toDoubleIntFormat(int) {
  let newInt;
  // console.log(typeof int)
  if (int < 10) {
    newInt = `0${int}`;
    return newInt;
  }
  return int;
}
// TODO: post has a body, comment section, upvote/downvote,
export class PhilosophersDate extends LitElement {
  static get properties() {
    return {
      dateCreated: {
        attribute: false,
        type: Date,
      },
    };
  }

  // static get dependencies() {

  // }

  static get element() {
    return 'philosophers-date';
  }

  static register() {
    utils.register(PhilosophersDate);
  }

  // TODO: render date from stored value
  render() {
    return html`
      <div wrapper>
        <div dateWrapper>
          <input
            date
            day
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getDate())}"
            readonly
          />
          <label slash>/</label>
          <input
            date
            month
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getMonth())}"
            readonly
          />
          <label slash>/</label>
          <input
            date
            year
            type="number"
            min="1"
            max="9999"
            value="${Number(this.dateCreated.getFullYear())}"
            readonly
          />
        </div>
        <div timeWrapper>
          <label>@</label>
          <input
            time
            hour
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getHours())}"
            readonly
          />
          <label colon>:</label>
          <input
            time
            minuet
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getMinutes())}"
            readonly
          />
          <label colon>:</label>
          <input
            time
            second
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getSeconds())}"
            readonly
          />
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      [wrapper] {
        display: flex;
        align-items: left;
        justify-content: left;
      }

      [dateWrapper],
      [timeWrapper] {
        display: flex;
        padding: 5px;
      }

      [slash],
      [colon] {
        padding-left: 2px;
        padding-right: 2px;
      }

      [date],
      [time] {
        height: 13px;
      }
    `;
  }

  constructor() {
    super();
    this.dateCreated = new Date();
  }
}

// customElements.define('philosophers-date', PhilosophersDate);