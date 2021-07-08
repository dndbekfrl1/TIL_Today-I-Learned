import React, { Component } from "react";

class TOC extends Component {
  render() {
    console.log("toc render");
    let lists = [];
    let data = this.props.date;
    let i = 0;

    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            // data-id={data[i].id}
            //bind로 data-id 인자 주기
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i += 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
