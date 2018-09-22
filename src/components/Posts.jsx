import React, { Component } from 'react';

class Posts extends Component {

	componentWillMount () {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then( response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error));
	}

	render() {
		return (
			<React.Fragment>
				<h1>Posts</h1>
			</React.Fragment>
		 );
	}
}

export default Posts;