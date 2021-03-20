import './App.css';
import Invoice from "./components/invoices/Invoice" 
import Nav from "./components/layout/Nav"
import MobileNav from "./components/layout/MobileNav"
import ModalState from "./context/modal/ModalState"

function App() {
  return (
    <ModalState>
      <div className="App">
        <div id="invoice-page-container">
          <Nav/>
          <MobileNav />
          <Invoice/>
        </div>
      </div>
    </ModalState>
  );
}

export default App;
