import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [seussDataB, setSeussDataB] = useState([])
  const [seussDataQ, setSeussDataQ] = useState([])
  const [loadB, setLoadB] = useState(false)
  const [loadQ, setLoadQ] = useState(false)

  async function seussBook() {
    useEffect(()=> {
      fetch('https://seussology.info/api/books')
        .then(async response => await response.json())
        .then(response => {setSeussDataB(response)})
        .then(response => setLoadB(true))
        .catch(error => console.log(error))
    }, [])
  }
  function seussQuote() {
    useEffect(()=> {
      fetch('https://seussology.info/api/quotes')
        .then(async response => await response.json())
        .then(response => {setSeussDataQ(response)})
        .then(response => setLoadQ(true))
        .catch(error => console.log(error))
    }, [])
  }

  seussBook()
  seussQuote()
  
  console.log(seussDataQ)
  console.log(seussDataB)

  return (
    <div className="App">
      <header id="top">
        <nav>
          <a href="#top">Seuss Treasury</a>
          <div>
            <a href="books.html">Books</a>
            <a href="quotes.html">Quotes</a>
          </div>
        </nav>
      </header>
      <h1>Seuss Treasury Home Page</h1>
    </div>
  )
}

export default App
