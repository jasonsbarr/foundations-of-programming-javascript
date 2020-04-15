import CodeMirror from "../codemirror-global";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/display/placeholder";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/selection/active-line";

import "../vendor/runkit/runkit";

export default class CodeEditor extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });
  }
}
