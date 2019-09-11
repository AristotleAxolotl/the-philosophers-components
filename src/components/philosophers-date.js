import { html, css, LitElement } from 'lit-element';

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
export default class PhilosophersDate extends LitElement {
  static get properties() {
    return {
      dateCreated: {
        attribute: false,
        type: Date,
      },
      isCreateDate: {
        type: Boolean,
      },
    };
  }

  render() {
    return html`
      ${this._displayTypeOfDate()}
    `;
  }

  _displayTypeOfDate() {
    if (this.isCreateDate) {
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

customElements.define('philosophers-date', PhilosophersDate);
