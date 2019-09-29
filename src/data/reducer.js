import initial from './initial';

const addPlayer = (state, action) => {
    return {
        ...state,
        players: [...state.players, action.player],
    };
};

// reducer determines how the state is affected by taking different actions
// and transforms our data based on the action's type property
const reducer = (state) => {
    switch (action.type) {
        case "add": return addPlayer(state, action);
        default: return state;
    };
};

export default reducer;