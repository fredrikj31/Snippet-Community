import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	atomOneDark,
	atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment';

class Post extends React.Component {

	constructor(props) {
		super(props);

		this.state = {isPostExpanded: false}
	}

	expandPost = (e) => {
		e.preventDefault();
		if (this.state.isPostExpanded === false) {
			this.setState({isPostExpanded: true})
		} else {
			this.setState({isPostExpanded: false})
		}
	}

	render() {
		let codeString = 
`class Car {
	// This is a comment that explains a lot of things.
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}`;
		return (
			<div className={`bg-gray-500 mx-16 mb-10 py-5 rounded-xl shadow-md overflow-hidden relative ${this.state.isPostExpanded ? "max-h-full" : " max-h-72"}`}>
				{/* Author Section */}
				<div className="flex ml-7 grid-cols-2 justify-start">
					<img
						className="h-12 rounded-full"
						src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
						alt="John Doe"
					/>
					<div className="grid grid-rows-2 ml-4">
						<span className="text-white">@<a className="hover:text-gray-300" href="./#">JohnDoe</a></span>
						<Moment className="text-gray-700" unix>{198784740}</Moment>
					</div>
				</div>

				{/* Description Section */}
				<p className="text-gray-200 ml-16 mr-16 mt-3">
					Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo.
				</p>

				{/* Snippet Section */}
				<div className="mx-28 mt-5">
					<SyntaxHighlighter
						language="javascript"
						showLineNumbers={true}

						style={atomOneDark}
					>
						{codeString}
					</SyntaxHighlighter>
				</div>

				{/* Expand Button */}
				<button className="absolute flex right-5 bottom-3 z-10 bg-gray-400 rounded-full w-10 h-10 justify-center items-center" onClick={this.expandPost}>
					<FontAwesomeIcon icon={this.state.isPostExpanded ? faChevronUp : faChevronDown} className="text-gray-200"></FontAwesomeIcon>
				</button>
			</div>
		);
	}
}

export default Post;
