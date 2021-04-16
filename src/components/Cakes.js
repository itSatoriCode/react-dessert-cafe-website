import React from 'react';
import './Cakes.css';
import { cakes } from '../data/menu';
import Slide from 'react-reveal/Reveal';

const Cakes = ({ id }) => {
	return (
		<div className="cakeContainer" id={id}>
			<h1 className="cakeHeading">Most popular</h1>
			<div className="cakeWrapper">
				{cakes.map((cake, index) => (
					<Slide
						key={index}
						right={index >= 3 ? true : false}
						left={index < 3 ? true : false}
					>
						<div className="cakeCard">
							<img src={cake.img} className="cakeImg" alt={cake.alt} />
							<div className="cakeInfo">
								<div className="protTitle">{cake.title}</div>
								<div className="protDesc">{cake.desc}</div>
								<div className="cakePrice">{cake.price}</div>
								<button className="cakeBtn">Select</button>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Cakes;
