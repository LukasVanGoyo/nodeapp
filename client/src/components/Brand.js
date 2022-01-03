import wallpaper from '../assets/zdj/photo1.jpg';
import logo from '../assets/logobiale.png';
import '../styles/Brand.css';



const Brand = () => {


	return(
		<section className="brand-wrapper">
			<img src={wallpaper} className="wallpaper" />
			<div className="brand-logo-container">
				<img className='logo' src={logo} />

			</div>
		</section>
		)
}

export default Brand;