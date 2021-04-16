import React from 'react';
import './Cakes.css';
import './Chefs.css';
import { chefs } from '../data/chefs';
import Slide from 'react-reveal/Reveal';

const Chefs = ({ id }) => {
	return (
		<div className="chefContainer" id={id}>
			<h1 className="cakeHeading">Our Kitchen Chefs</h1>
			<div className="cakeWrapper">
				{chefs.map((chef, index) => (
					<Slide
						key={(chef, index)}
						right={index % 2 === 1 ? true : false}
						left={index % 2 === 0 ? true : false}
					>
						<div className="cakeCard">
							<img src={chef.img} className="chefImg" alt={chef.alt} />
							<div className="cakeInfo">
								<div className="protTitle">{chef.name}</div>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Chefs;
