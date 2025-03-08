import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('/api/invoices')
      .then(response => setInvoices(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            {invoice.storeName} - {invoice.orderId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
