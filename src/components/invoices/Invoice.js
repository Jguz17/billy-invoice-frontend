import React from 'react'
const InvoiceData = require("../../data.json")

const Invoice = () => {
    return (
        <div>
            <h2>Invoices</h2>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                {InvoiceData.map(item => {
                    return <div style={{ display: "flex", padding: "5px", justifyContent: "space-around"}}>
                        <div style={{ width: "150px" }}><h3>{item.id}</h3></div>
                        <div style={{ width: "150px" }}><p>{item.paymentDue}</p></div>
                        <div style={{ width: "150px" }}><p>{item.clientName}</p></div>
                        <div style={{ width: "150px", textAlign: "center" }}><h3>{item.total}</h3></div>
                        <div style={{ width: "150px", textAlign: "right" }}><p>{item.status}</p></div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Invoice
