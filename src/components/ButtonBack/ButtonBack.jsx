import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonBack.scss'

import ButtonBackIcon from '../../assets/button-back-icon.svg'

function ButtonBack() {
	const navigate = useNavigate();

	function handleButtonBackClick() {
		navigate(-1)
	};

	return (
		<button onClick={handleButtonBackClick} className='button-back'>
			<img className='button-back__icon' src={ButtonBackIcon} alt="" />
		</button>
	);
}

export default ButtonBack;