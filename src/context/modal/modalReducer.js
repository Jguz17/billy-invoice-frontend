import {
    TURN_ON_MODAL,
    TURN_OFF_MODAL
} from "../types"

export default (state, action) => {
    switch(action.type) {
        case TURN_ON_MODAL: 
            return {
                ...state,
                modalIsOn: action.payload
            }
        case TURN_OFF_MODAL: 
            return {
                ...state,
                modalIsOn: action.payload
            }
        default:
            return state
    }
}