import React, { useState } from "react";
import { connect } from "react-redux";
import AppBar from "@mui/material/AppBar";
import StoreIcon from "@mui/icons-material/Store";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import { CART_REMOVE } from "../../Store/Actions";

const Header = (props) => {
	const [state, setState] = useState({
		right: false,
	});

	const [itemQuantities, setItemQuantities] = useState({});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ [anchor]: open });
	};

	const handleQuantityChange = (itemId, change) => {
		setItemQuantities((prevQuantities) => ({
			...prevQuantities,
			[itemId]: (prevQuantities[itemId] || 0) + change,
		}));
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 350, // Adjust the width here
			}}
			role="presentation"
		>
			<List>
				{props.Cart.map((item) => (
					<ListItem key={item.id} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DeleteIcon
									onClick={() => {
										props.CART_REMOVE(item.name);
									}}
									style={{ cursor: "pointer", color: "tomato" }}
								/>
							</ListItemIcon>
							<ListItemText primary={item.name} />
							<ListItemIcon>
								<Button
									onClick={() => handleQuantityChange(item._id, -1)}
									startIcon={<RemoveIcon />}
									size="medium"
									disabled={(itemQuantities[item._id] || 0) === 0}
								/>
								{itemQuantities[item._id] || 0}
								<Button
									onClick={() => handleQuantityChange(item._id, 1)}
									startIcon={<AddIcon />}
									size="medium"
								/>
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<CssBaseline />
			<AppBar position="relative" sx={{ bgcolor: "green" }}>
				<Toolbar>
					<div style={{ display: "flex", alignItems: "center" }}>
						<StoreIcon sx={{ mr: 2, fontSize: 40 }} />
						<Typography variant="h6" color="inherit" noWrap>
							Anas Store
						</Typography>
					</div>
					<div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
						<ShoppingCartIcon
							sx={{ mr: 2, cursor: "pointer", fontSize: 36 }}
							onClick={toggleDrawer("right", true)}
						/>
						<Typography variant="h6" color="inherit" noWrap>
							{props.Cart.length}
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="right"
				open={state["right"]}
				onClose={toggleDrawer("right", false)}
			>
				{list("right")}
			</Drawer>
		</div>
	);
};

const mapStateToProps = (state) => ({
	Cart: state.cart.cart,
});

const mapDispatchToProps = { CART_REMOVE };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
