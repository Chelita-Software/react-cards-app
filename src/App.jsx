import { useEffect, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import CreateCardForm from './components/CreateCardForm'

import useCardsStore from '../store/index.js'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const cards = useCardsStore(state => state.cards)
  const fetchCards = useCardsStore(state => state.fetchCards)

  useEffect(() => {
    fetchCards()
  }, [])

  const openCardForm = () => {
    setIsOpen(true)
  }

  const closeCardForm = () => {
    setIsOpen(false)
  }

  //if (isLoading) {
  //  return (
  //    <section className='section'>
  //      <h1 className='title has-text-centered'>Loading...</h1>
  //    </section>
  //  )
  //}

  return (
    <section className='section'>
      <h1 className='title has-text-centered'>Cards App</h1>
      <br/>
      <div className='is-flex is-justify-content-center'>
        <button className='button is-primary' onClick={openCardForm}>Crear Tarjeta</button>
        <CreateCardForm isOpen={isOpen} closeController={closeCardForm} />
      </div>
      <br/>
      <div className="columns">
        { isLoading ? <h1>Loading...</h1> :
        cards.map(card => (
          <div className='column is-one-quarter' key={card.id}>
            <Card cardObject={card} />
          </div>
        ))
        }
      </div>
    </section>
  )
}

export default App
