import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";
import "./App.css";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<PostForm />
					<hr />
					<Posts />
				</div>
			</Provider>
		);
	}
}

export default App;
