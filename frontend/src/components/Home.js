import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [invoices, setInvoices] = useState([]);
  const navigate = useNavigate();

  const fetchInvoices = () => {
    fetch("http://localhost:5000/invoices")
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/");
    fetchInvoices();
  }, []);

  const deleteInvoice = async (id) => {
    if (!window.confirm("Delete this invoice?")) return;

    await fetch(`http://localhost:5000/invoices/${id}`, {
      method: "DELETE"
    });

    fetchInvoices(); // refresh list
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Invoices</h2>
        <button onClick={() => navigate("/invoice")}>+ Add Invoice</button>
      </div>

      {invoices.length === 0 && <p>No invoices found</p>}

      {invoices.map(inv => (
        <div className="invoice-card" key={inv.id}>
          <div>
            <strong>{inv.invoiceNumber}</strong>
            <p>{inv.clientName}</p>
            <small>{inv.date}</small>
          </div>

          <div className="right">
            <span className={`status ${inv.status.toLowerCase()}`}>
              {inv.status}
            </span>
            <p>₹{inv.amount}</p>
            <button className="delete" onClick={() => deleteInvoice(inv.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
