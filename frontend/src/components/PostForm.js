import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class PostForm extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {};
	}
	
	onSubmit = (e) => {
		e.preventDefault();

		//TODO: Handle submit of post
	}

	
	render() {
		return(
			<div className="mx-32 mt-10">

				<textarea style={this.textAreaStyle} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" spellcheck="false" placeholder="Tell or describe your snippet to the world!" maxLength={300}></textarea>

			</div>
		);
	}

	textAreaStyle = {
		resize: "none",
	};
}

export default PostForm;