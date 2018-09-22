import React, { Component } from "react";
import { Provider } from "react-redux";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";
import "./App.css";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware())
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
