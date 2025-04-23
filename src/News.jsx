import React from 'react';

export default function News({back}) {
  return (
    <news-page>
      <h1>News Page</h1>
      <p>
        This is the news page.
      </p>
      <p>
        <a href="#" onClick={back}>Home</a>
      </p>
    </news-page>
  )
}
