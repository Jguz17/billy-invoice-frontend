import React from 'react'

const InvoiceItem = (props) => {
    return (
        <div style={{ display: "flex", padding: "5px", justifyContent: "space-between"}}>
            <div style={{ width: "150px" }}><h3>#{props.invoiceItem.id}</h3></div>
            <div style={{ width: "150px" }}><p>{props.invoiceItem.paymentDue}</p></div>
            <div style={{ width: "150px" }}><p>{props.invoiceItem.clientName}</p></div>
            <div style={{ width: "150px", textAlign: "center" }}><h3>${props.invoiceItem.total}</h3></div>
            <div style={{ width: "150px", textAlign: "right" }}><p>{props.invoiceItem.status}</p></div>
        </div>
    )
}

export default InvoiceItem
