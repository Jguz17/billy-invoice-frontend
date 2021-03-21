import React, { useContext } from 'react'
import plusLogo from "../../layout/plus-circle.svg"
import Dropdown from "../../layout/Dropdown"
import Button from '@material-ui/core/Button'
import ModalContext from "../../../context/modal/modalContext"

const MobileHeaderContent = (props) => {

    const modalContext = useContext(ModalContext)

    const { turnOnModal } = modalContext
    
    return (
        <div className="mobile-header" id="invoice-header">
            <div id="mobile-header-container">
                <h2 className="header2">Invoices</h2>
                <p>{props.invoices.length} Total invoices</p>
            </div>
            <div id="invoice-header-actions">
                <Dropdown text="Filter"/>
                <Button onClick={() => turnOnModal()} id="button"><img src={plusLogo} alt="plus"/>New</Button>
            </div>
        </div>
    )
}

export default MobileHeaderContent
