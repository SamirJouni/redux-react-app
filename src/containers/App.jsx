import React, { Component } from "react";
import PostForm from "../components/PostForm";
import Posts from "../components/Posts";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PostForm />
        <hr />
				<Posts />
			</div>
		);
	}
}

export default App;
