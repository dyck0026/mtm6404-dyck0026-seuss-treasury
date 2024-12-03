import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [seussDataB, setSeussDataB] = useState([])
  const [seussDataQ, setSeussDataQ] = useState([])
  const [loadB, setLoadB] = useState(false)
  const [loadQ, setLoadQ] = useState(false)
  const [clickData, setclickData] = useState(false)
  const [clickBook, setclickBook] = useState(0)

  async function seussBook() {
    useEffect(()=> {
      fetch('https://seussology.info/api/books')
        .then(async response => await response.json())
        .then(response => {setSeussDataB(response)})
        .then(response => setLoadB(true))
        .catch(error => console.log(error))
    }, [])
  }
  async function seussQuote() {
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
  
  console.log(seussDataB)

  return (
    <div className="App">
      <header id="top">
      <nav>
          <a href="index.html">Seuss Treasury</a>
          <div>
            <a href="#top">Books</a>
            <a href="quotes.html">Quotes</a>
          </div>
        </nav>
      </header>
      <h1>Seuss Treasury Books</h1>
      <div className='covers'>
        {!clickData && loadB && seussDataB.map(book => (
            <div id={"book"+seussDataB.indexOf(book)}>
            <button onClick={() => {setclickData(true),setclickBook(seussDataB.indexOf(book))}}><img src={seussDataB[seussDataB.indexOf(book)].image} alt={"Cover image of" + seussDataB[seussDataB.indexOf(book)].title}></img></button>
            </div>
        ))}
      </div>
        {clickData && loadB && <div className='details'>
            <img id="a" src={seussDataB[clickBook].image} alt={"Cover image of" + seussDataB[clickBook].title}></img>
            <div id="b" className='desc'>
                <h2>{seussDataB[clickBook].title}</h2>
                <p>{seussDataB[clickBook].description}</p>
            </div>
            <button id="c" onClick={() => {setclickData(false),setclickBook(0)}}><span className='material-symbols-outlined'>close</span></button>
        </div>}
    </div>
  )
}

export default App