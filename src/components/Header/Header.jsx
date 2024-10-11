import React from 'react';
import Title from '../Title/Title';
import './Header.scss'

function Header({ text }) {
	return (
		<header className='header'>
			<Title level={1} className='main-title' text={text} />
		</header>
	)
}

export default Header