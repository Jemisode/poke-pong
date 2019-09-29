import { connect } from 'react-redux';
import Players from './Players';

import { addPlayer } from "../../data/actions/state";

const mapStatetoProps = (state) => {
        return {
                players: state.players, 
        };
};

const mapDispatchToProps = dispatch => { 
        return { 
            handlePlayer: (name) => dispatch(addPlayer(name)),
        }; 
    };

export default connect(mapStatetoProps, mapDispatchToProps)(Players);