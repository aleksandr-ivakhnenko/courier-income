import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonAdd.scss'

import ButtonAddIcon from '../../assets/button-add-icon.svg'

function ButtonAdd() {
	const navigate = useNavigate();

	function handleButtonAddClick() {
		navigate('/Create-order')
	};

	return (
		<button onClick={handleButtonAddClick} className='button-add'>
			<img className='button-add__icon' src={ButtonAddIcon} alt="" />
		</button>
	);
}

export default ButtonAdd;