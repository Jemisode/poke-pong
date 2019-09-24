import initial from './initial';

const addPlayer = (state, action) => {
    return {
        ...state,
        players: [...state.players, action.player], 
    };
};

const reducer = (state, action) => {
    switch (action.type) { 
        case "add": return addPlayer(state, action);
        default: return state;
    }; 
};

export default reducer;