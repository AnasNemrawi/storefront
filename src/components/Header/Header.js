import React from 'react'
import CameraIcon from '@mui/icons-material/PhotoCamera';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import StoreIcon from '@mui/icons-material/Store';

function Header() {
	return (
		<div>
			<CssBaseline />
			<AppBar position="relative" sx={{ bgcolor: 'green', p: 1 }}>
				<Toolbar>
					<StoreIcon sx={{ mr: 2, fontSize: 50 }} />
					<Typography variant="h5" color="inherit" noWrap>
						Anas Store
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header

