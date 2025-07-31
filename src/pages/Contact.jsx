// pages/Contact.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Contact() {
  // Demo of useParams if you navigate to /contact/:id
  const params = useParams();

  return (
    <div>
      <h1>Contact Page</h1>
      {params.id && <p>Contact ID: {params.id}</p>}
    </div>
  );
}

export default Contact;
