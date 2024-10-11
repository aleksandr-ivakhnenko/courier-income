import React from 'react';
import Header from '../components/Header/Header';
import ButtonAdd from '../components/ButtonAdd/ButtonAdd';

function Today() {
	return (
		<div className='page-today'>
			<Header text='КурьерДоход' />
			<ButtonAdd />
		</div>
	);
}

export default Today;