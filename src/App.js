import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchField: event.target.value };
    });
  };
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <h1 className="app-title">MONSTERS ROLODEX</h1>
        <SearchBox
          className={"monster-search-box"}
          onInputChangeHandeler={this.onSearchChange}
          placeholder={"search monseters"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
