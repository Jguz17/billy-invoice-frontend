import React, { useContext } from 'react'
import plusLogo from "../../layout/plus-circle.svg"
import Dropdown from "../../layout/Dropdown"
import Button from '@material-ui/core/Button'
import ModalContext from "../../../context/modal/modalContext"

const DesktopHeaderContent = (props) => {

    const modalContext = useContext(ModalContext)

    const { turnOnModal } = modalContext

    return (
        <div className="desktop-header" id="invoice-header">
            <div>
                <h2 className="header2">Invoices</h2>
                <p>There are {props.invoices.length} total invoices</p>
            </div>
            <div id="invoice-header-actions">
                <Dropdown text="Filter by status"/>
                <Button onClick={() => turnOnModal(true)} id="invoice-header-button"><img src={plusLogo} alt="plus"/>New Invoice</Button>
            </div>
        </div>
    )
}

export default DesktopHeaderContent
