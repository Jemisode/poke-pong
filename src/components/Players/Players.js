import React, { Component } from "react";
import Grid from 'react-css-grid'
import Winner from '../../assets/winner.png';

class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value });
	}

	handleAdd = () => {
		let { handleSubmit } = this.props;
		handleSubmit(this.state.player);
	}

	render() {

		return (
			<React.Fragment>	
							<div className="body background">   
								<form className="container">
									<label className="form-label">
									</label>

									<input 
										className="form-input" 
										name="player"
										type="text"
										value={ this.state.player } 
										onChange={ this.handleChange } 
									/>

									<button 
										type="submit"
										onClick={ this.handleAdd }
										className="btn-submit">
										Add
									</button>
								</form>
						</div>

					{/*<p>Player: { this.state.player } </p>*/}
					
			</React.Fragment>
		);
	}
};


export default Players;