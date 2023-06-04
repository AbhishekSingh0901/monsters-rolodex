import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onInputChangeHandeler } = this.props;
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={onInputChangeHandeler}
      />
    );
  }
}

export default SearchBox;
