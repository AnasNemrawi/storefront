import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const footerStyle = {
	position: 'fixed',
	bottom: 0,
	width: '100%',
	backgroundColor: 'green',
	padding: '20px', // Adjust this value for the desired padding
};

function Copyright() {
	return (
		<Typography variant="body2" align="center" color='white'>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				Anas Store
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function Footer() {
	return (
		<Box sx={footerStyle} component="footer">
			<Typography variant="h9" align="center" gutterBottom>
				{/* Add your footer content here */}
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="text.secondary"
				component="p"
			>
				{/* Add more content here if needed */}
			</Typography>
			<Copyright />
		</Box>
	);
}

export default Footer;
