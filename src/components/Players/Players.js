import React, { Component } from "react";
import Grid from "react-css-grid";

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

	handleAdd(e, state, players) {
	e.preventDefault();
	this.props.handleAdd({ 
        name: this.state.player,
    });
    
    }

	render() {

		return (
			<React.Fragment>
					<Grid gap={24}>
						<div className="grid background">
							</div>

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
									/>

									<button 
										type="submit"
										onClick={ this.handleSubmit }
										className="btn-submit">
										Add
									</button>
								</form>
						</div>
					</Grid>	
			</React.Fragment>
		);
	}
};


export default Players;