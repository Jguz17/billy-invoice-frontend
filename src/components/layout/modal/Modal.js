import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import TextField from '@material-ui/core/TextField'

import ModalContext from "../../../context/modal/modalContext"
import InvoiceContext from "../../../context/invoice/invoiceContext"

const Modal = () => {

    const [invoice, setInvoice] = useState({
        client_name: "",
        date: "",
        total: ""
    })

    const { client_name, date, total } = invoice

    const modalContext = useContext(ModalContext)
    const invoiceContext = useContext(InvoiceContext)

    const { turnOffModal } = modalContext
    const { addInvoice } = invoiceContext

    const onChange = (e) => {
        setInvoice({
            ...invoice,
            [e.target.name]: e.target.value
        })
    }

    const clearFields = () => {
        document.getElementsByName("client_name")[0].value = ""
        document.getElementsByName("address")[0].value = ""
        document.getElementsByName("date")[0].value = ""
        document.getElementsByName("total")[0].value = ""
    }
    

    return (
        <div id="modal-main">
            <TextField onChange={onChange} className="form-field fluid" id="outlined-search" name="client_name" label="Client Name" type="search" variant="outlined" />
            <TextField className="form-field fluid" id="outlined-search" name="address" label="Street Address" type="search" variant="outlined" />
            <div>
                <TextField className="fluid-s"
                    id="date"
                    className="form-field"
                    label="Invoice date"
                    type="date"
                    onChange={onChange}
                    name="date"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField className="form-field" onChange={onChange} name="total" className="fluid-s" id="outlined-search" label="Enter total" type="search" variant="outlined" />
                
            </div>
            <div id="modal-button-container">
                <Button style={{ backgroundColor: "#F9FAFE", color: "#7E88C3" }} className="fluid-s" onClick={() => turnOffModal()} id="button"><HighlightOffIcon className="xs-margin-right"/> Cancel</Button>
                <Button className="fluid-s" onClick={() => { 
                    addInvoice(invoice) 
                    clearFields()
                    turnOffModal()
                }} id="button">Submit</Button>
            </div>
        </div>
    )
}

export default Modal
