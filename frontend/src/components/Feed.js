import React from 'react';
import Post from './Post';

class Feed extends React.Component {
	render() {
		return(
			<div class="w-6/12 ml-52 mt-7 bg-gray-700 rounded-lg">
				<div class="ml-11 mt-8 mb-5 text-white text-3xl font-semibold">
					Feed Activity:
				</div>
				<Post></Post>
			</div>
		);
	}
}

export default Feed;