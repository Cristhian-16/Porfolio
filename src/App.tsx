import { Aside, MainContainer } from './components';

function App() {
	return (
		<>
			<div className='container text-white max-w-[1200px] mx-auto mt-[80px] grid grid-cols-2'>
				<Aside />
				<MainContainer />
			</div>
		</>
	);
}

export default App;
