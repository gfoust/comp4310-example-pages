import React from 'react';

export default function About({back}) {
  return (
    <about-page>
      <h1>About Page</h1>
      <p>
        This is the about page.
      </p>
      <p>
        <a href="#" onClick={back}>Home</a>
      </p>
    </about-page>
  )
}
