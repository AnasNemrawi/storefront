import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import { office } from '../../Store/productReducer'; // Import the action creator

function Hero(props) {
	const handleButtonClick = (name) => {
		props.office(name);
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
			<Button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={() => handleButtonClick('office')}>Office</Button>
			<Button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={() => handleButtonClick('food')}>Food</Button>
			<Button style={{ backgroundColor: '#ffc107', color: '#000', border: 'none', padding: '10px 20px', cursor: 'pointer' }} onClick={() => handleButtonClick('electronics')}>Electronics</Button>
		</div>

	);
}

const mapDispatchToProps = { office };

export default connect(null, mapDispatchToProps)(Hero);
