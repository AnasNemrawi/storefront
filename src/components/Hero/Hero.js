import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { office } from '../../Store/productReducer';
function Hero() {
	const dispatch = useDispatch();

	const handleButtonClick = (name) => {
		dispatch(office(name));
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
			<Button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={() => handleButtonClick('office')}>Office</Button>
			<Button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={() => handleButtonClick('food')}>Food</Button>
			<Button style={{ backgroundColor: '#ffc107', color: '#000', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={() => handleButtonClick('electronics')}>Electronics</Button>
		</div>
	);
}


export default Hero;
