import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs } from "@fortawesome/free-solid-svg-icons";

class SideBar extends React.Component {
	render() {
		return (
			<div className="w-2/12 bg-white dark:bg-gray-700 rounded-r-3xl p-3 shadow-lg">
				<div className="flex items-center space-x-4 p-2 mb-5">
					<img
						className="h-12 rounded-full"
						src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
						alt="John Doe"
					/>
					<div>
						<h4 className="font-semibold text-lg text-gray-700 dark:text-white capitalize font-poppins tracking-wide">
							John Doe
						</h4>
					</div>
				</div>
				<ul className="space-y-2 text-sm">
					<li>
						<a
							href="./#"
							className="flex items-center space-x-3 text-gray-700 dark:text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
						>
							<span className="text-gray-600">
								<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
							</span>
							<span className="font-semibold">Feed</span>
						</a>
					</li>
					<li>
						<a
							href="./#"
							className="flex items-center space-x-3 text-gray-700 hover:text-gray-700 dark:text-white p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
						>
							<span>
								<FontAwesomeIcon icon={faCogs}></FontAwesomeIcon>
							</span>
							<span className="font-semibold">Settings</span>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default SideBar;