import { LitElement, html, css } from "lit";

class WelcomeBanner extends LitElement {
  static get properties() {
    return {
      name: { type: String },
    };
  }
  constructor() {
    super();
    this.name = "";
  }
  render() {
    return html`<h1>
      Hello, <decorated-text text=${this.name}></decorated-text>
    </h1> `;
  }
}
customElements.define("welcome-banner", WelcomeBanner);

class DecoratedText extends LitElement {
  static styles = css`
    :host {
      color: green;
    }
  `;
  static get properties() {
    return {
      text: { type: String },
    };
  }
  constructor() {
    super();
    this.text = "";
  }
  render() {
    return html`<span>${this.text}</span>`;
  }
}
customElements.define("decorated-text", DecoratedText);
