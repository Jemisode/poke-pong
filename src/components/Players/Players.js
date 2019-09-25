import React, { Component } from "react";

class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
			player: "",
			
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value });
	}

	handleAdd = () => {
		// console.log(this.state.player);
		
	}

	render() {

		return (
			<React.Fragment>	
							<center><br></br>
							<div className="body background">   
								<form className="container">
									<label className="form-label">
									</label>

									<input 
										className="form-input" 
										onChange={ this.handleChange } 
										value={ this.state.value } 
                                        type="text" 
										placeholder="Pick a Pokémon..."
										list="players"
									/>

									{/* <li id="players">
										{ this.state.players.map((player) => {
                                    		return (<li key={ player.id } value={ player.name } />);
                                		}) }
									</li> */}

									<button 
										type="submit"
										onClick={ this.handleAdd }
										className="btn-submit">
										Add
									</button>
								</form>
						</div>
						</center>
			</React.Fragment>
		);
	}
};


export default Players;