import React, { useReducer } from 'react'
import ModalContext from "./modalContext"
import modalReducer from "./modalReducer"

import {
    TURN_ON_MODAL,
    TURN_OFF_MODAL
} from "../types"

const ModalState = (props) => {
    const initialState = {
        modalIsOn: false
    }

    const [state, dispatch] = useReducer(modalReducer, initialState)

    // turn on modal
    const turnOnModal = (x) => {
        dispatch({
            type: TURN_ON_MODAL,
            payload: x
        })
    }

    return (
        <ModalContext.Provider value={{
            modalIsOn: state.modalIsOn,
            turnOnModal
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState