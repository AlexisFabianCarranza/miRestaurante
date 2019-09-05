export default (state = {}, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return action.user;
        default: 
            return state;
    }
    return state;
}

/*Actions Creators, devuelven este tipo de objetos JSON
{
    type: 'LOG_IN',
    user: Firebase
}
{
    type: 'EVENT_ADDED',
    event: {}
}
{
    type: 'LOG_OUT'
}
*/