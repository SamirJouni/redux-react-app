import React, { Component } from "react";

class PostForm extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			body: ""
		};
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		};
	};

	render() {
		return (
			<div>
				<h1>Add Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title:</label>
						<br />
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<div>
						<label>Body:</label>
						<br />
						<textarea
							name="body"
							value={this.state.body}
							onChange={this.onChange}
						/>
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
