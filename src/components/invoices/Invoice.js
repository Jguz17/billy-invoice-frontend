import React from 'react'
import InvoiceItem from "./InvoiceItem"
import plusLogo from "../layout/plus-circle.svg"
import Dropdown from "../layout/Dropdown"
const InvoiceData = require("../../data.json")

const Invoice = () => {
    return (
        <div style={{ backgroundColor: "#f8f8fb", width: "100%" }}>
            <div style={{ margin: "2.5rem auto", maxWidth: "1000px" }}>
                <header style={{ display: "flex", padding: "5px", justifyContent: "space-between", marginBottom: "2.5rem"}}>
                    <div>
                        <h2 style={{ width: "150px", fontSize: "2rem"}}>Invoices</h2>
                        <p>There are {InvoiceData.length} total invoices</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Dropdown/>
                        <button style={{ backgroundColor: "#7C5DFA", border: "none", padding: ".5rem 1rem", color: "white", borderRadius: "2rem", display: "flex", alignItems: "center", outline: "none" }}><img src={plusLogo} style={{ marginRight: ".5rem" }}/>New Invoice</button>
                    </div>
                </header>
                {InvoiceData.map(invoiceItem => {
                    return <InvoiceItem invoiceItem={invoiceItem}/>
                })}
            </div>
        </div>
    )
}

export default Invoice
