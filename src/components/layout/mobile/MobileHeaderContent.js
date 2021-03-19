import React from 'react'
import plusLogo from "../../layout/plus-circle.svg"
import Dropdown from "../../layout/Dropdown"
import Button from '@material-ui/core/Button'


const MobileHeaderContent = (props) => {
    return (
        <div className="mobile-header" id="invoice-header">
            <div>
                <h2 className="header2">Invoices</h2>
                <p>{props.invoices.length} Total invoices</p>
            </div>
            <div id="invoice-header-actions">
                <Dropdown text="Filter"/>
                <Button id="invoice-header-button"><img src={plusLogo} alt="plus"/>New Invoice</Button>
            </div>
        </div>
    )
}

export default MobileHeaderContent
