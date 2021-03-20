import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import ModalContext from "../../../context/modal/modalContext"

const Modal = () => {

    const modalContext = useContext(ModalContext)

    const { turnOffModal } = modalContext

    return (
        <div id="modal-main">
            <Button onClick={() => turnOffModal()} id="button"><HighlightOffIcon className="xs-margin-right"/> Cancel</Button>
        </div>
    )
}

export default Modal
