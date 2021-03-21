import './App.css';
import Invoice from "./components/invoices/Invoice" 
import Nav from "./components/layout/Nav"
import MobileNav from "./components/layout/MobileNav"
import ModalState from "./context/modal/ModalState"
import InvoiceState from "./context/invoice/InvoiceState"

function App() {
  return (
    <InvoiceState>
      <ModalState>
        <div className="App">
          <div id="invoice-page-container">
            <Nav/>
            <MobileNav />
            <Invoice/>
          </div>
        </div>
      </ModalState>
    </InvoiceState>
  );
}

export default App;
