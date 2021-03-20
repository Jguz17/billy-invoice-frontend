import React, { useState, useEffect, useContext } from 'react'
import InvoiceItem from "./InvoiceItem"
import DesktopHeaderContent from "../layout/desktop/DesktopHeaderContent"
import MobileHeaderContent from "../layout/mobile/MobileHeaderContent"
import ModalContext from "../../context/modal/modalContext"
import Ghost from "../layout/Ghost"
import Modal from "../layout/modal/Modal"

const Invoice = () => {

    const modalContext = useContext(ModalContext)

    const { modalIsOn } = modalContext

    const [invoices, setInvoices] = useState(0);

    useEffect(() => {
        fetch("https://billy-invoice-api.herokuapp.com/invoices")
        .then(res => res.json())
        .then(data => setInvoices(data))
    }, [])

    return (
        <div id="invoice-container" >
            <div id="invoice-wrapper" >
                <header>
                    <DesktopHeaderContent invoices={invoices}/>
                    <MobileHeaderContent  invoices={invoices}/>
                </header>
                { modalIsOn ? <div><Modal/><Ghost /></div>: null }
                {invoices && invoices.map(invoiceItem => {
                    return <InvoiceItem key={invoiceItem.id} invoiceItem={invoiceItem}/>
                })}
            </div>
        </div>
    )
}

export default Invoice