import React from 'react';
import Title from '../Title/Title';
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonSave from '../ButtonSave/ButtonSave';

import './HeaderCustom.scss';

function HeaderCustom() {
	return (
		<header className='header header-custom'>
			<div className='button__inner'>
				<ButtonBack />
			</div>
			<ButtonSave />
		</header>
	)
}

export default HeaderCustom