import React, { useState } from 'react';
import SearchForm from "./SearchForm";
import ResultList from "./ResultList"

const Search = () => {
	const [inputData, setInputData] = useState("");
	const hanDleChangeText = (text) => {
		setInputData(text)
	}

	console.log(inputData.input)
	return (
		<div>
			<div className='app'>

			</div>
			<div>
				<SearchForm hanDleChangeText={hanDleChangeText} />
				<ResultList endpoint={
					inputData.input ?
						"https://api.themoviedb.org/3/search/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&language=en-US&query=" + inputData.input : "https://api.themoviedb.org/3/discover/movie?api_key=e2a4ed8d27f5fe8594ef31b7b6957b82&language=en-US"
				} />
			</div>
		</div>

	);
};
export default Search
