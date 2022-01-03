import '../styles/Card.css'
import { TiStar } from 'react-icons/ti';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCircle, BsCircleFill} from 'react-icons/bs';
import { useState } from 'react';

const FullStar = () => {
		return(
				<BsCircleFill size={10} color={'#afcf92'} className="recipe-card-circle" />
			)
}

const EmptyStar = () => {
	return(
			<BsCircle size={10} color={'#afcf92'} className="recipe-card-circle" />
		)
}

const StarRating = ({rating}) => {
		var r = parseInt(rating);
		var unactiveStars = 5 - r
	return(
		<div>
			{[ ...Array(r)].map(star=> <FullStar />
				
			)}

			{[ ...Array(unactiveStars)].map(star=> <EmptyStar />
				
			)}
				<span className="recipe-card-votes-number">(4 głosy){unactiveStars}</span>
		</div>
		)
}


const Card = ({image, title, desc, rating}) => {
	return(
		<div className="recipe-card">
			<img src={image} alt="" className="recipe-card-image" />
			<div className="recipe-card-tags">
				<a href="#" className="recipe-card-tag">Main dish</a>
				<a href="#" className="recipe-card-tag">Vegan</a>
			</div>
			<div className="recipe-card-title-box">
				<p className="recipe-card-title">{ title }</p>
				<div className="recipe-card-rating">
						<StarRating rating={rating} />
				</div>
			</div>

			
			
			<p className="recipe-card-desc">{desc}</p>
			<div className="recipe-card-footer">
				<AiOutlineHeart size={25} className="recipe-card-heart-icon" />
			</div>
		</div>
		)}

export default Card;
