function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const intialState = `This is a paragraph

# Heading 1
## Heading 2
### Heading 3

- Item 1
- Item 2
- Item 3

[Google](google.com)
[YouTube](youtube.com)

This is a inline \`<div></div>\`

This is a Block

\`\`\`
  let Num = 1;
  let name = 'amen'
  
\`\`\`

> Block Quote!

**THIS IS BOLD**

![THIS IS MARKDOWN](https://img.icons8.com/ios-filled/2x/markdown.png)
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: intialState });_defineProperty(this, "handleChange",


    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", { className: "head text-center" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6 rounded" }, /*#__PURE__*/
      React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange, placeholder: "Enter Markdown" })), /*#__PURE__*/

      React.createElement("div", { className: "col-6 rounded preview", id: "preview", "p-3": true, dangerouslySetInnerHTML: { __html: markdown } }))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));