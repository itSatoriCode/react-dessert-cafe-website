import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';

const Favorite = () => {
	return (
		<div className="favContainer">
			<h2>Our favorite</h2>

			<div className="favContent">
				<Slide left>
					<div className="favImage" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
							Strawberries and cream and spice with a zip of balsamic. This cake
							celebrates all the classic strawberry combinations, a little like a
							greatest hits album, but way more delicious!
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn">Order Now</button>
		</div>
	);
};

export default Favorite;
