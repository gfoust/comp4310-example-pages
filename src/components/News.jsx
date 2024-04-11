
export default function News({back}) {
  return (
    <news-page>
      <h1>News Page</h1>
      <p>
        This is the news page.
      </p>
      <p>
        <a href="#" onClick={back}>Back</a>
      </p>
    </news-page>
  )
}