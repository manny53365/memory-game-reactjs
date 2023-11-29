import { useState } from 'react'
import './App.css'

const cardImages = [
  {"src": '/img/helmet-1.png'},
  {"src": '/img/potion-1.png'},
  {"src": '/img/ring-1.png'},
  {"src": '/img/scroll-1.png'},
  {"src": '/img/shield-1.png'},
  {"src": '/img/sword-1.png'}
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = async () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards);
    setTurns(0);
  }

  console.log(cards, turns)

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards && cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' alt='card front' src = {card.src}/>
              <img className='back' alt='card back' src = '/img/cover.png'/>
            </div>
            <div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App