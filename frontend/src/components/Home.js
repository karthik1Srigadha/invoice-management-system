import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/invoices")
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  }, []);

 return (
  <div className="container">
    <h2>Invoices</h2>

    <button onClick={() => navigate("/invoice")}>
      + Add Invoice
    </button>

    {invoices.map(inv => (
      <div className="invoice-item" key={inv.id}>
        <div>
          <strong>{inv.invoiceNumber}</strong><br />
          {inv.clientName} · ₹{inv.amount}
        </div>
        <span className={`status ${inv.status.toLowerCase()}`}>
          {inv.status}
        </span>
      </div>
    ))}
  </div>
);

}

export default Home;
