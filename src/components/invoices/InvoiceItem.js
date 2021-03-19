import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const InvoiceItem = (props) => {
    let color = "#373B53"
    let bgColor = "#F4F4F5"

    if (props.invoiceItem.status === "paid") {
        color = "#33D69F"
        bgColor = "#F3FDFA"
    } else if (props.invoiceItem.status === "pending") {
        color = "#FF8F00"
        bgColor = "#FFF9F0"
    } 

    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(props.invoiceItem.date);
    let shortMonth = d.toLocaleString('en-us', { month: 'short' }); /* Jun */
    let date = d.getDate()
    let year = d.getFullYear()

    const shortDate = `${date} ${shortMonth} ${year}`

    return (
        <div id="invoice-item-container">
            <div><h3><span style={{ color: "#888EB0" }}>#</span>{props.invoiceItem.id}</h3></div>
            <div style={{ color: "#888EB0"}}><p>Due {shortDate}</p></div>
            <div className="text-align-center" style={{ color: "#888EB0" }}><p>{props.invoiceItem.client_name}</p></div>
            <div className="text-align-center"><h3>${props.invoiceItem.total}</h3></div>
            <div className="" style={{ width: "150px", height: "50px", backgroundColor: `${bgColor}`, color: `${color}`, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "5px" }}><FiberManualRecordIcon fontSize="small" style={{ marginRight: ".25rem" }}/><p>{props.invoiceItem.status.charAt(0).toUpperCase() + props.invoiceItem.status.slice(1)}</p></div>
            <KeyboardArrowRightIcon id="right-arrow" style={{ color: "#7C5DFA" }}/>
        </div>
    )
}

export default InvoiceItem
