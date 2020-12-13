import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: "",
		};
	}
	//  gets the Api data
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json()) //we get the promise and convert it into json format using .json method then it will be returned as new promise
			.then((user) => this.setState({ monsters: user })); // again using the .then method we get the promise or the array that we got from it and we set monsters to the array.
	}
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};
	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					onSearchChange={this.onSearchChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello my name is Sauvic</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
