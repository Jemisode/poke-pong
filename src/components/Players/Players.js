import React, { Component } from "react";

class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
			player: "",
			playerID: 0,
			error: false,
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleChange(e) {
		this.setState({ player: e.currentTarget.value });
	}

	handleAdd = () => {
		// console.log(this.state.player);
		let { chosenPlayer, handlePlayer } = this.props;
		let { players } = this.state;

		let name = this.state.player;
		let id = this.state.playerID;

		if (chosenPlayer.length <= 15 && players.map(player => player.name).includes(name) && !chosenPlayer.map(player => player.name).includes(name)) {
			handlePlayer(id, name);
			this.setState({ player: "", playerID: 0 });
		} else {
			this.setState({ error: true });
		}
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

									<datalist id="players">
										{ this.state.players.map((player) => {
                                    		return (<option key={ player.id } value={ player.name } />);
                                		}) }
										{/*{this.state.players.map(player => {
										return <li key={player.id}>{player.name}</li>;
										})}*/}
									</datalist>

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