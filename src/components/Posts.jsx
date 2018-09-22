import React, { Component } from "react";

class Posts extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}

	componentWillMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then(response => response.json())
			.then(posts => this.setState({ posts }))
			.catch(error => console.log(error));
	}

	render() {
		const postItems = this.state.posts.map(post =>
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		);
		return (
			<React.Fragment>
				<h1>Posts</h1>
				{postItems}
			</React.Fragment>
		);
	}
}

export default Posts;
