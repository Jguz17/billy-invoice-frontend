import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import ModalContext from "../../../context/modal/modalContext"
import TextField from '@material-ui/core/TextField';

const Modal = () => {

    const modalContext = useContext(ModalContext)

    const { turnOffModal } = modalContext

    return (
        <div id="modal-main">
            <TextField className="fluid" id="outlined-search" label="Client Name" type="search" variant="outlined" />
            <TextField className="fluid" id="outlined-search" label="Street Address" type="search" variant="outlined" />
            <div>
                <TextField className="fluid-s"
                    id="date"
                    label="Invoice date"
                    type="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField className="fluid-s" id="outlined-search" label="Enter total" type="search" variant="outlined" />
                
            </div>
            <div id="modal-button-container">
                <Button style={{ backgroundColor: "#F9FAFE", color: "#7E88C3" }} className="fluid-s" onClick={() => turnOffModal()} id="button"><HighlightOffIcon className="xs-margin-right"/> Cancel</Button>
                <Button className="fluid-s" onClick={() => turnOffModal()} id="button"><HighlightOffIcon className="xs-margin-right"/> Cancel</Button>
            </div>
        </div>
    )
}

export default Modal
