import "./lib/codemirror-global.js";
import CodeMirror from "./lib/vendor/codemirror/src/codemirror.js";
import "./lib/vendor/codemirror/mode/javascript/javascript.js";
import "./lib/vendor/codemirror/addon/edit/closebrackets.js";
import "./lib/vendor/codemirror/addon/display/placeholder.js";
import "./lib/vendor/codemirror/addon/edit/matchbrackets.js";
import "./lib/vendor/codemirror/addon/selection/active-line.js";

class CodeEditor extends HTMLElement {
  constructor() {
    super();

    let ed = document.createElement("textarea");

    ed.textContent = this.textContent;
    ed.className = "editor";
    this.textContent = "";
    this.appendChild(ed);

    this.editorInit();
  }

  editorInit() {
    CodeMirror.fromTextArea(
      this.querySelector(".editor"),
      {
        mode: "javascript",
        lineNumbers: true,
        lineWrapping: true,
        tabsize: 2,
        theme: "darcula",
        autoCloseBrackets: true,
        placeholder: "Code here...",
        matchBrackets: true,
        styleActiveLine: true
      }
    );
  }
}

customElements.define("code-editor", CodeEditor);
