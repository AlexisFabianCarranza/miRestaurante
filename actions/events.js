export function addEvent(event){
    return {
        type: 'ADD_EVENT',
        event
    }
}

export function removeEvent(event) {
    return {
        type: 'REMOVE_EVENT',
        event
    }
}

export function clearEvents(event) {
    return {
        type: 'CLEAR_EVENTS'
    }
}