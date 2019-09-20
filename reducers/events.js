export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_EVENT':{
                //state.filter((eventOld) => eventOld.title === action.event);
                return state.concat([action.event]);
            }
        case 'REMOVE_EVENT':
            {
                return state.filter((event)=>  event.id != action.event);
            }
            
        case 'CLEAR_EVENTS':
            return []
        default: 
            return state;
    }
}
