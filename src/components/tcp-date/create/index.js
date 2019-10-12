/* eslint-disable import/extensions */
import { html, css, LitElement } from 'lit-element';
import { utils } from '../../lib';

function _toDoubleIntFormat(int) {
  let newInt;

  if (int < 10) {
    newInt = `0${int}`;
    return newInt;
  }

  return int;
}

// TODO: post has a body, comment section, upvote/downvote,
export class CreatePhilosophersDate extends LitElement {
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
    return 'create-philosophers-date';
  }

  static register() {
    utils.register(CreatePhilosophersDate);
  }

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
          />
          <label slash>/</label>
          <input
            date
            month
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getMonth())}"
          />
          <label slash>/</label>
          <input
            date
            year
            type="number"
            min="1"
            max="9999"
            value="${Number(this.dateCreated.getFullYear())}"
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
          />
          <label colon>:</label>
          <input
            time
            minuet
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getMinutes())}"
          />
          <label colon>:</label>
          <input
            time
            second
            type="number"
            min="1"
            max="99"
            value="${_toDoubleIntFormat(this.dateCreated.getSeconds())}"
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
