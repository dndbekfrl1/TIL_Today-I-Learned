import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC.js";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
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
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id == this.state.selected_content_id) {
        return data;
        break;
      }
      i += 1;
    }
  }

  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode == "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode == "read") {
      let _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode == "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_content_id += 1;
            let _contents = this.state.contents.concat({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: _contents,
              mode: "read",
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode == "update") {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            let _content = Array.from(this.state.contents);
            let i = 0;
            while (i < _content.length) {
              if (_content[i].id == _id) {
                _content[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i += 1;
            }
            this.setState({
              contents: _content,
              mode: "read",
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    console.log("app render");

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
          data={this.state.contents}
        ></TOC>

        <Control
          onChangeMode={function (_mode) {
            if (_mode === "delete") {
              if (window.confirm("Are you sure?")) {
                let i = 0;
                let _contents = Array.from(this.state.contents);
                while (i < this.state.contents.length) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    break;
                  }
                  i += 1;
                }
                this.setState({
                  contents: _contents,
                  mode: "welcome",
                });
                alert("deleted");
              }
            }
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
