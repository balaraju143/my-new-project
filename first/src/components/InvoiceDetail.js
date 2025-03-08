import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function InvoiceDetail() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    api.get(`/invoices/${id}`)
      .then(response => setInvoice(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!invoice) return <p>Loading...</p>;

  return (
    <div>
      <h1>Invoice Details</h1>
      <p>Store: {invoice.storeName}</p>
      <p>Order ID: {invoice.orderId}</p>
      <p>Date: {invoice.date}</p>
      <ul>
        {invoice.items.map(item => (
          <li key={item.id}>{item.name}: {item.quantity} x {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceDetail;
