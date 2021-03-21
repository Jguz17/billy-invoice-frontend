import React, { useContext } from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InvoiceContext from "../../context/invoice/invoiceContext"
import CancelIcon from '@material-ui/icons/Cancel';

const InvoiceItem = (props) => {

    const invoiceContext = useContext(InvoiceContext)

    const { deleteInvoice } = invoiceContext

    let color = "#373B53"
    let bgColor = "#F4F4F5"

    if (props.invoiceItem.status === "paid") {
        color = "#33D69F"
        bgColor = "#F3FDFA"
    } else if (props.invoiceItem.status === "pending") {
        color = "#FF8F00"
        bgColor = "#FFF9F0"
    } 

    var d = new Date(props.invoiceItem.date);
    let shortMonth = d.toLocaleString('en-us', { month: 'short' }); /* Jun */
    let date = d.getDate()
    let year = d.getFullYear()

    const shortDate = `${date} ${shortMonth} ${year}`

    return (
        <div id="invoice-item-container">
            <div><h3><span className="light-purple-color">#</span>{props.invoiceItem.id}</h3></div>
            <div className="light-purple-color"><p>Due {shortDate}</p></div>
            <div className="text-align-center light-purple-color"><p>{props.invoiceItem.client_name}</p></div>
            <div className="text-align-center"><h3>${props.invoiceItem.total}</h3></div>
            <div className="status" style={{ backgroundColor: `${bgColor}`, color: `${color}`}}><FiberManualRecordIcon fontSize="small" className="xs-margin-right"/><p>{props.invoiceItem.status ? props.invoiceItem.status.charAt(0).toUpperCase() + props.invoiceItem.status.slice(1) : `${props.invoiceItem.status}`}</p></div>
            <CancelIcon style={{ color: "#f50057" }} onClick={() => deleteInvoice(props.invoiceItem.id)} id="right-arrow"/>
        </div>
    )
}

export default InvoiceItem
