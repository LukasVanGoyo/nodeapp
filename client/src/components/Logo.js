const Logo = ({width, height, image}) => {
	return(
		<div>
			<img src={image} height={height} width={width} className="logo" />
		</div>
		);
}

export default Logo;
