import React from 'react';

export default function Contact({back}) {
  return (
    <contact-page>
      <h1>Contact Page</h1>
      <p>
        This is the contact page.
      </p>
      <p>
        <a href="#" onClick={back}>Home</a>
      </p>
    </contact-page>
  )
}
