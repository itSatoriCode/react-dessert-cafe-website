import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggle, show }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={`sideContainer ${show ? 'show' : ''}`}>
			<div className="close" onClick={toggle}>
				Close
			</div>
			<div className="sideMenu">
				<Link to="/" className="sideLink" onClick={() => scrollTo('menu')}>
					Menu
				</Link>
				<Link to="/" className="sideLink" onClick={() => scrollTo('staff')}>
					Staff
				</Link>
				<Link to="/" className="sideLink">
					Custom cakes
				</Link>
				<Link to="/" className="sideLink">
					Contact
				</Link>

				<div className="btnWrap">
					<div className="sideRoute">Book now</div>
				</div>
			</div>
		</div>
		// <SidebarContainer isOpen={isOpen} onClick={toggle}>
		// 	<Icon onClick={toggle}>
		// 		<CloseIcon />
		// 	</Icon>

		// 	<SidebarMenu>
		// 		<SidebarLink to="/">Pizzas</SidebarLink>
		// 		<SidebarLink to="/">Desserts</SidebarLink>
		// 		<SidebarLink to="/">Full Menu</SidebarLink>
		// 	</SidebarMenu>

		// 	<SideBtnWrap>
		// 		<SidebarRoute to="/">Order Now</SidebarRoute>
		// 	</SideBtnWrap>
		// </SidebarContainer>
	);
};

export default Sidebar;
