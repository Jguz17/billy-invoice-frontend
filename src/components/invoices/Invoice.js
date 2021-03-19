import React, { useState } from 'react'
import InvoiceItem from "./InvoiceItem"
import plusLogo from "../layout/plus-circle.svg"
import Dropdown from "../layout/Dropdown"
import Button from '@material-ui/core/Button'
const InvoiceData = require("../../data.json")
const uniqid = require('uniqid');

const Invoice = () => {

    const [invoices, setInvoices] = useState(0);

    fetch("https://billy-invoice-api.herokuapp.com/invoices")
    .then(res => res.json())
    .then(data => setInvoices(data))

    return (
        <div id="invoice-container" >
            <div id="invoice-wrapper" >
                <header style={{ display: "flex", padding: "5px", justifyContent: "space-between", marginBottom: "2.5rem"}}>
                    <div>
                        <h2 style={{ width: "150px", fontSize: "2rem"}}>Invoices</h2>
                        <p>There are {invoices.length} total invoices</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Dropdown/>
                        <Button style={{ backgroundColor: "#7C5DFA", border: "none", padding: ".5rem 1rem", color: "white", borderRadius: "2rem", display: "flex", alignItems: "center", outline: "none" }}><img src={plusLogo} alt="Plus sign logo" style={{ marginRight: ".5rem" }}/>New Invoice</Button>
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
