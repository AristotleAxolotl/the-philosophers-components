export const utils = {
  getDirectDecendants: (parent, selector) => {
    const hostName = parent.nodeName;
    return Array.from(parent.querySelectorAll(selector)).filter(
      decendant => hostName === decendant.parentNode.nodeName,
    );
  },
  domToHtml: element => {
    const container = document.createElement('div');
    container.appendChild(element.cloneNode(true));
    return container.innerHTML;
  },
  htmlToDom: html => {
    const container = document.createElement('div');
    container.innerHTML = html;
    return container.firstElementChild;
  },
  register: klass => {
    if (window.customElements.get(klass.element)) return;
    window.customElements.define(klass.element, klass);
    if (klass.dependencies) {
      klass.dependencies.map(depKlass => depKlass.register());
    }
  },
};
