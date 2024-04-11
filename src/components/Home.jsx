
export default function Home({pageSetter}) {

  return (
    <home-page>
      <h1>Home Page</h1>
      <p>
        This is the home page.
      </p>
      <ul>
        <li>
          <a href="#" onClick={pageSetter('about')}>About</a>
        </li>
        <li>
          <a href="#" onClick={pageSetter('contact')}>Contact</a>
        </li>
        <li>
          <a href="#" onClick={pageSetter('news')}>News</a>
        </li>
      </ul>
    </home-page>
  )
}