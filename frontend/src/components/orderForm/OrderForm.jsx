import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../features/orders/orderSlice";
import { toast } from "react-toastify";

const OrderForm = () => {
	const [text, setText] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(createOrder({ text }));
		setText("");
		toast.success("Order created");
	};
	return (
		<section className="form">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="text">Order</label>
					<input
						type="text"
						className="form-control"
						id="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Enter order"
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-block" type="submit">
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default OrderForm;
