import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonSave.scss'

function ButtonSave() {
	const navigate = useNavigate();

	function handleButtonSaveClick() {
		navigate(-1)
	};

	return (
		<button onClick={handleButtonSaveClick} className='button-save'>Сохранить</button>
	);
}

export default ButtonSave;