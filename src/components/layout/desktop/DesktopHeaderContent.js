import React from 'react'
import plusLogo from "../../layout/plus-circle.svg"
import Dropdown from "../../layout/Dropdown"
import Button from '@material-ui/core/Button'


const DesktopHeaderContent = (props) => {
    return (
        <div className="desktop-header" id="invoice-header">
            <div>
                <h2 className="header2">Invoices</h2>
                <p>There are {props.invoices.length} total invoices</p>
            </div>
            <div id="invoice-header-actions">
                <Dropdown text="Filter by status"/>
                <Button id="invoice-header-button"><img src={plusLogo} alt="plus"/>New Invoice</Button>
            </div>
        </div>
    )
}

export default DesktopHeaderContent
