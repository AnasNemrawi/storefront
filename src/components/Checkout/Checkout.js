import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Checkout() {
	const product = useSelector((state) => state);

	return (
		<div>
			<section className="checkout-main">
				<div>Order Summary</div>
				<section className="card-container">
					{product.cart.cart.map((item) => (
						<div className="card" key={item.id}>
							<p>{item.name}</p>
							<div className="theprice">
								<img
									className="imges"
									src={`https://source.unsplash.com/random?${item.name}`}
									alt={item.name}
								/>
								<p>${item.price}</p>
							</div>
						</div>
					))}
					<hr />
					<div className="total">
						<p>Total: </p>
						<p>
							$
							{product.cart.cart.reduce(
								(total, item) => total + item.price,
								0
							)}
						</p>
					</div>
				</section>
				<section className="lower-section">
					<section className="Billing-address">
						<h1>Billing Address</h1>
						<div className="input-div">
							<input
								className="pay-input"
								placeholder="First Name"
								type="text"
							/>
							<input className="pay-input" placeholder="Address" type="text" />
							<input className="pay-input" placeholder="City" type="text" />
							<input className="pay-input" placeholder="State" type="text" />
							<input className="pay-input" placeholder="Zip" type="text" />
						</div>
					</section>
					<section className="payment-details">
						<h1>Payment Details</h1>
						<div className="input-div">
							<input placeholder="Credit Card #" type="text" />
							<input className="pay-input" placeholder="CVV" type="text" />
							<input
								className="pay-input"
								placeholder="Expiration"
								type="date"
							/>
						</div>
					</section>
				</section>
				<button className="PAY-BUTTON">PLACE YOUR ORDER</button>
			</section>
		</div>
	);
}

export default Checkout;
