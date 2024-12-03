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
      fetch('https://seussology.info/api/quotes/random/10')
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
          <a href="index.html">Seuss Treasury</a>
          <div>
            <a href="books.html">Books</a>
            <a href="#top">Quotes</a>
          </div>
        </nav>
      </header>
      <h1>Seuss Treasury Quotes</h1>
      {(loadQ) && [
      <div>
        <blockquote>
            "{seussDataQ[0].text}"
        </blockquote>
        <p>- {seussDataQ[0].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[1].text}"
        </blockquote>
        <p>- {seussDataQ[1].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[2].text}"
        </blockquote>
        <p>- {seussDataQ[2].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[3].text}"
        </blockquote>
        <p>- {seussDataQ[3].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[4].text}"
        </blockquote>
        <p>- {seussDataQ[4].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[5].text}"
        </blockquote>
        <p>- {seussDataQ[5].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[6].text}"
        </blockquote>
        <p>- {seussDataQ[6].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[7].text}"
        </blockquote>
        <p>- {seussDataQ[7].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[8].text}"
        {seussDataQ[8].text}
        </blockquote>
        <p>- {seussDataQ[8].book.title}</p>
      </div>,
      <div>
        <blockquote>
        "{seussDataQ[9].text}"
        </blockquote>
        <p>- {seussDataQ[9].book.title}</p>
      </div>
    ]}
    </div>
  )
}

export default App