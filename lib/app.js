let script = document.createElement("script");
let site = (window.location.host === "localhost:8000")
  ? "http://localhost:8000"
  : "https://jasonsbarr.github.io/foundations-of-programming-javascript";

script.setAttribute("type", "module");
script.setAttribute("src", `${site}/js/code-editor.js`);

document.body.appendChild(script);
