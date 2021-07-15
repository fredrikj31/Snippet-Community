import SuccessToast from './components/SuccessToast';
import SideBar from './components/SideBar';
import Feed from './components/Feed';

function App() {
	return (
		<div class="flex flex-wrap bg-gray-100 dark:bg-gray-600 w-full h-full">
			<SideBar></SideBar>
			<Feed></Feed>
			<SuccessToast title="Success" message="You are now signed up!"></SuccessToast>
		</div>
	);
}

export default App;
