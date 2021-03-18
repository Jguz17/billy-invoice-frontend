import './App.css';
import Invoice from "./components/invoices/Invoice" 
import Nav from "./components/layout/Nav"
import MobileNav from "./components/layout/MobileNav"

function App() {
  return (
    <div className="App">
      <div id="invoice-page-container">
        <Nav/>
        <MobileNav />
        <Invoice/>
      </div>
    </div>
  );
}

export default App;
