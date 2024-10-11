import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarItem.scss';

function NavbarItem({ to, label, icon }) {
	return (
		<li className='navbar__item'>
			<NavLink
				to={to}
				className={({ isActive }) => isActive ? 'navbar__link active' : 'navbar__link'}
			>
				<img src={icon} className='navbar__icon' />
				{label}
			</NavLink>
		</li>
	);
}

export default NavbarItem;