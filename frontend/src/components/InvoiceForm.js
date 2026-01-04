import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvoiceForm() {
  const navigate = useNavigate();

  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");

  const submitInvoice = async () => {
    if (!invoiceNumber || !clientName || !date || !amount) {
      alert("All fields are required");
      return;
    }

    await fetch("http://localhost:5000/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        invoiceNumber,
        clientName,
        date,
        amount,
        status
      })
    });

    navigate("/home");
  };

  return (
    <div className="auth">
      <h2>Create Invoice</h2>

      <input placeholder="Invoice Number" onChange={e => setInvoiceNumber(e.target.value)} />
      <input placeholder="Client Name" onChange={e => setClientName(e.target.value)} />
      <input type="date" onChange={e => setDate(e.target.value)} />
      <input type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />

      <select onChange={e => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>Paid</option>
        <option>Unpaid</option>
      </select>

      <button onClick={submitInvoice}>Save Invoice</button>
    </div>
  );
}

export default InvoiceForm;
