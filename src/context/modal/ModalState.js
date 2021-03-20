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
    const turnOnModal = () => {
        const bodyElm = document.querySelector('body')
        window.scrollTo(0, 0);
        bodyElm.style.overflow = "hidden"
        dispatch({
            type: TURN_ON_MODAL,
            payload: true
        })
    }

    // turn off modal
    const turnOffModal = () => {
        const bodyElm = document.querySelector('body')
        bodyElm.style.overflow = "initial"
        dispatch({
            type: TURN_OFF_MODAL,
            payload: false
        })
    }

    return (
        <ModalContext.Provider value={{
            modalIsOn: state.modalIsOn,
            turnOnModal,
            turnOffModal
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalState