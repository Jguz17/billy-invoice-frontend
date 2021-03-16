import React from 'react'
const InvoiceData = require("../../data.json")

const Invoice = () => {
    return (
        <div style={{ maxWidth: "1000px", margin: "3rem auto 0" }}>
            <header style={{ display: "flex", padding: "5px", justifyContent: "space-between"}}>
                <div>
                    <h2 style={{ width: "150px", fontSize: "2rem"}}>Invoices</h2>
                    <p>There are {InvoiceData.length} total invoices</p>
                </div>
                <button>Filter by status</button>
                <button>New Invoice</button>
            </header>
            {InvoiceData.map(item => {
                return <div style={{ display: "flex", padding: "5px", justifyContent: "space-between"}}>
                    <div style={{ width: "150px" }}><h3>#{item.id}</h3></div>
                    <div style={{ width: "150px" }}><p>{item.paymentDue}</p></div>
                    <div style={{ width: "150px" }}><p>{item.clientName}</p></div>
                    <div style={{ width: "150px", textAlign: "center" }}><h3>${item.total}</h3></div>
                    <div style={{ width: "150px", textAlign: "right" }}><p>{item.status}</p></div>
                </div>
            })}
        </div>
    )
}

export default Invoice
