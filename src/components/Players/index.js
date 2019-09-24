import { connect } from 'react-redux';
import Players from './Players';

const mapStatetoProps = (state) => {
        return {
                players: state.players, 
        }
};

export default connect(mapStatetoProps)(Players);