import "../vendor/runkit/runkit";

export default class CodeEditor extends HTMLElement {
  constructor() {
    super();

    this.exercise = this.getAttribute("exercise");
    this.code = this.textContent;
    this.textContent = "";
    this.container = document.createElement("div");
    this.placeholder = document.createElement("pre");
    this.heading = document.createElement("h2");

    this.container.style.margin = "32px 16px";
    this.placeholder.textContent = this.code;
    this.heading.textContent = this.exercise ? `Exercise ${this.exercise}` : "Example:";
    this.appendChild(this.heading);
    this.appendChild(this.placeholder);
    this.appendChild(this.container);

    this.runkitInit();
  }

  runkitInit() {
    this.editor = RunKit.createNotebook({
      element: this.container,
      source: this.code,
      onLoad: () => this.placeholder.remove(),
      tabSize: 2,
      nodeVersion: "13.x.x",
      preamble: this.getAttribute("preamble") || ""
    });
  }
}
