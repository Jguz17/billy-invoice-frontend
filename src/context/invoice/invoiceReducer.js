import {
    GET_INVOICES,
    ADD_INVOICE,
    DELETE_INVOICE
} from "../types"

export default (state, action) => {
    switch(action.type) {
        case GET_INVOICES:
            return {
                ...state,
                invoices: action.payload
            }
        case ADD_INVOICE:
            return {
                ...state,
                invoices: [...state.invoices, action.payload]
            }
        case DELETE_INVOICE:
            return {
                ...state,
                invoices: state.invoices.filter(invoice => invoice.id !== action.payload)
            }
        default:
            return state
    }
}