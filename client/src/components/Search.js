import { FaSearch }from 'react-icons/fa';
import '../styles/Search.css'

const Search = () => {


	return(
		<div className="search-wrapper" >
			<form className="search-form">
				<input className="search-input" type="text" />
				<button className="search-btn" type="button">
					<FaSearch size={25} color="black" className="search-icon" />
				</button>

			</form>

		</div>

		)
}

export default Search;