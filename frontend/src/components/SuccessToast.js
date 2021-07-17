import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

class SuccessToast extends React.Component {
	constructor(props) {
		super(props);

		this.state = { show: true };
	}

	closeToast = () => {
		this.setState({ show: false });
	};

	render() {
		if (this.state.show === true) {
			return (
				<div className="fixed top-16 right-16">
					<div className="flex bg-white dark:bg-gray-800 w-full mx-auto overflow-hidden rounded-lg shadow-lg">
						<div className="flex items-center justify-center w-12 bg-green-500 text-white">
							<FontAwesomeIcon
								icon={faCheckCircle}
							></FontAwesomeIcon>
						</div>

						<div className="grid grid-rows-2 my-2">
							<div className="text-green-500 font-semibold ml-3">
								{this.props.title}
							</div>
							<div className="text-gray-500 dark:text-gray-300 ml-3">
								{this.props.message}
							</div>
						</div>

						<div className="flex ml-5 mr-7 text-gray-700 dark:text-white">
							<button onClick={this.closeToast}>
								<FontAwesomeIcon
									icon={faTimes}
								></FontAwesomeIcon>
							</button>
						</div>
					</div>
				</div>
			);
		} else {
			return <></>;
		}
	}
}

export default SuccessToast;
