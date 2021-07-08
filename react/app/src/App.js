import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC.js";
import Content from "./components/Content";
import Subject from "./components/Subject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: { title: "WEB", sub: "Wrold wide web" },
      welcome: { title: "Welcome", desc: "Hello, React!" },
      selected_content_id: 2,
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText..." },
        { id: 2, title: "CSS", desc: "HTML is HyperText..." },
        { id: 3, title: "JavaSCript", desc: "HTML is HyperText..." },
      ],
    };
  }

  render() {
    console.log("app render");
    let _title,
      _desc = null;
    if (this.state.mode == "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id == this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
    }
    return (
      <div className="app">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: "welcome",
            });
          }.bind(this)}
        ></Subject>

        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id),
            });
            console.log(id);
          }.bind(this)}
          date={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
