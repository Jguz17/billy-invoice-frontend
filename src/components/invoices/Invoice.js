import React, { useState, useEffect } from 'react'
import InvoiceItem from "./InvoiceItem"
import plusLogo from "../layout/plus-circle.svg"
import Dropdown from "../layout/Dropdown"
import Button from '@material-ui/core/Button'

const Invoice = () => {

    const [invoices, setInvoices] = useState(0);

    useEffect(() => {
        fetch("https://billy-invoice-api.herokuapp.com/invoices")
        .then(res => res.json())
        .then(data => setInvoices(data))
    }, [])

    return (
        <div id="invoice-container" >
            <div id="invoice-wrapper" >
                <header id="invoice-header">
                    <div>
                        <h2 className="header2">Invoices</h2>
                        <p>There are {invoices.length} total invoices</p>
                    </div>
                    <div id="invoice-header-actions">
                        <Dropdown/>
                        <Button id="invoice-header-button"><img src={plusLogo} alt="plus"/>New Invoice</Button>
                    </div>
                </header>
                
                {invoices && invoices.map(invoiceItem => {
                    return <InvoiceItem key={invoiceItem.id} invoiceItem={invoiceItem}/>
                })}
            </div>
        </div>
    )
}

export default Invoice