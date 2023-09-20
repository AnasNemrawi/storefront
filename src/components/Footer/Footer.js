import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
		<div>
			<Box sx={{ bgcolor: 'green', p: 6 }} component="footer">
				<Typography variant="h9" align="center" gutterBottom>
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="text.secondary"
					component="p"
				>
				</Typography>
				<Copyright />
			</Box>
		</div>
	)
}

export default Footer
