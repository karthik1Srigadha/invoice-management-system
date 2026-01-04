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

    alert("Invoice Created Successfully");
    navigate("/home");
  };

  return (
    <div className="container">
      <h2>Create Invoice</h2>

      <input
        placeholder="Invoice Number"
        value={invoiceNumber}
        onChange={e => setInvoiceNumber(e.target.value)}
      />

      <input
        placeholder="Client Name"
        value={clientName}
        onChange={e => setClientName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>Paid</option>
        <option>Unpaid</option>
        <option>Pending</option>
      </select>

      <button onClick={submitInvoice}>Save Invoice</button>
    </div>
  );
}

export default InvoiceForm;
