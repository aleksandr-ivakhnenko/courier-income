import React from 'react';
import './Title.scss';

function Title({ level, className, text }) {
	const Element = `h${level}`;

	return (
		<Element className={className}>{text}</Element>
	);
}

export default Title;