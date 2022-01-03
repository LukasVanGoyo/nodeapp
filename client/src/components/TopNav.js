import { FaFacebookF, FaUser, FaInstagram, FaYoutube, FaSearch } from 'react-icons/fa';
import '../styles/TopNav.css';
import { GiHamburgerMenu } from 'react-icons/gi'
import Search from './Search.js'
import { useState } from 'react'
const TopNav = () => {

	const[searchValue, setSearchValue] = useState('')
	const[isMenuVisible, setIsMenuVisible] = useState(false)

	const showMenu = () => {
		setIsMenuVisible(!isMenuVisible)
	}


	const menuStyle = {
		transform: isMenuVisible ? 'translateY(0px)' : 'translateY(-300px)'
	}
	return(
		<div className="top-nav-wrapper">
			<div className="top-nav-container">
				<div className="social-icons-container">
					<FaYoutube size={20} color="black" className="social-icon" />
					<FaFacebookF size={20} color="black" className="social-icon" />
					<FaInstagram size={20} color="black" className="social-icon" />
				</div>


				<div className="top-nav-dropdown-container">
					<GiHamburgerMenu size={25} color="black" className="dropdown-icon" onClick={showMenu} />
				</div>



				<div className="top-nav-auth-container">
					<div className="top-nav-search-container">
						<form className="search-form">
							<input className="search-input" type="text" placeholder="Szukaj" />
							<button type="button" className="search-btn" >
								<FaSearch className="search-icon" />

							</button>
						</form>
					</div>

					<FaUser size={22} color="black" className="user-icon" />
				</div>

			</div>


			<div className="dropdown-menu-wrapper" style={menuStyle}>
				<ul className="menu">
					<li>
						<a href="#">Kuchnie Świata</a>
					</li>
					<li>
						<a href="#">Dania Główne</a>
					</li>
					<li>
						<a href="#">Przystawki</a>
					</li>
					<li>
						<a href="#">Desery</a>
					</li>
					<li>
						<a href="#">Wegetariańskie</a>
					</li>
					<li>
						<a href="#">Ciasta</a>
					</li>
					<li>
						<a href="#">Dzika kuchnia</a>
					</li>
				</ul>

			</div>
		</div>
		)
}

export default TopNav;
