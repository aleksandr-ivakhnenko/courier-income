import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import './Navbar.scss';

import TodayIcon from '../../assets/today-icon.svg';
import OrdersIcon from '../../assets/orders-icon.svg';
import StatisticsIcon from '../../assets/statistics-icon.svg';
import ProfileIcon from '../../assets/profile-icon.svg';

function Navbar() {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<NavbarItem
					className='navbar__item'
					to='/Today'
					label='Сегодня'
					icon={TodayIcon}
				/>
				<NavbarItem
					className='navbar__item'
					to='/Orders'
					label='Заказы'
					icon={OrdersIcon}
				/>
				<NavbarItem
					className='navbar__item'
					to='/Statistics'
					label='Статистика'
					icon={StatisticsIcon}
				/>
				<NavbarItem
					className='navbar__item'
					to='/Profile'
					label='Профиль'
					icon={ProfileIcon}
				/>
			</ul>
		</nav>
	);
}

export default Navbar;