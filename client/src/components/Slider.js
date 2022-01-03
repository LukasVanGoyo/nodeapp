import { useState, useRef } from 'react'
import photo1 from '../assets/zdj/photo1.jpg';
import photo2 from '../assets/zdj/photo2.jpg';
import photo3 from '../assets/zdj/photo3.jpg';
import photo4 from '../assets/zdj/photo4.jpg';
import photo5 from '../assets/zdj/photo5.jpg';
import photo6 from '../assets/zdj/photo6.jpg';
import photo7 from '../assets/zdj/photo7.jpg';
import photo8 from '../assets/zdj/photo8.jpg';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Card from './Card.js'


const Slider = () => {
	const sliderWrapper = useRef(null);


	const slides = [{
		title: 'Konfitura z porzeczki i malin',
		desc: 'Przepyszna konfitura z czerwonej porzeczki. Idealna do mięs i pieczywa. Przepyszna konfitura z czerwonej porzeczki. ',
		image: photo1,
		rating: '3'
	},
	{
		title: 'Papryczka',
		desc: 'Ostre zielone papryczki, które nadadzą pikantności każdemu daniu.',
		image: photo2,
		rating: 4
	},
	{
		title: 'Papryczka w słodko-kwaśnej zalewie',
		desc: 'Ostre zielone papryczki',
		image: photo3,
		rating: '0'
	},
	{
		title: 'Jajka sadzone',
		desc: 'Ostre zielone paprsdhfshfksjd dhfsjhdf ',
		image: photo4,
		rating: '2'
	},
	{
		title: 'Papryczka',
		desc: 'Ostre zielone papryczki',
		image: photo5,
		rating: '5'
	},
	{
		title: 'Papryczka',
		desc: 'Ostre zielone papryczki',
		image: photo6,
		rating: '4'
	},
	{
		title: 'Papryczka',
		desc: 'Ostre zielone papryczki',
		image: photo7,
		rating: '1'
	},
	{
		title: 'Papryczka',
		desc: 'Ostre zielone papryczki',
		image: photo8,
		rating: '3'
	}]







	const slideLeft = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 300;
	}

	const slideRight = () => {
		var slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 300;
	}

	return(
		<>
			<h1 className="slider-title"> Sprawdź nasze najnowsze przepisy </h1>
			<div className="slider-wrapper" ref={sliderWrapper}>
				<MdChevronLeft size={40} className="left-arrow" onClick={slideLeft} />
				<div id="slider">
					{
						slides.map((slide,index) => {
							return(
								<div className="slide" key={index}>
									<Card image={slide.image} title={slide.title} desc={slide.desc} rating={slide.rating} />

								</div>

								)
						})
					}
				</div>
				<MdChevronRight size={40} className="right-arrow" onClick={slideRight} />
			</div>

		</>

)}

export default Slider;