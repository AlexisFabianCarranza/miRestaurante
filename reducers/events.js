export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_EVENT':
            return state.concat([action.event]);
        case 'CLEAR_EVENTS':
            return [];
        default: 
            return state;
    }
}
