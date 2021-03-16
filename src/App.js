import './App.css';
import Invoice from "./components/invoices/Invoice" 
import DesktopNav from "./components/layout/DesktopNav"

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <DesktopNav/>
        <Invoice/>
      </div>
    </div>
  );
}

export default App;
