import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class ShoeTemplate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			brand: props.brand,
			type: props.type,
			size: props.size,
			id: props.id
		}
	}

	render() {

		var style = {
			textAlign: 'center'
		};

		var source = 'kobe.jpg';

		return (
			<div className = "col-lg-3">
 				<div className = "panel panel-default">
 					<div className = "card-body" style = {style}>
 						<h1>{this.state.brand}</h1>
 						<div className = "container-fluid">
 							<img src = {require('./kobe.jpg')} />
 						</div>
 						<h5>{this.state.type}</h5>
 						<p>{this.state.size}  ID:{this.state.id}</p>
 						<button className = "btn btn-block btn-success">Purchase</button>
 					</div>
 				</div>
 			</div>

 			
		);
	}
}

export default ShoeTemplate