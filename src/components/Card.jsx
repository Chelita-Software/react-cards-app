import { useState } from 'react'

import EditCardForm from './EditCardForm.jsx'

import useCardsStore from '../../store/index.js'

function Card({ cardObject }) {
  const [isOpen, setIsOpen] = useState(false)

  const deleteCard = useCardsStore(state => state.deleteCard)
  
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={cardObject.img}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{cardObject.titulo}</p>
          </div>
        </div>

        <div className="content">
          {cardObject.descripcion}
          <br />
          <br />
          <div className="is-flex is-flex-direction-row">
            {cardObject.tags.map(tag => (
                <div key={tag}>
                    <span className="tag mr-3">{tag}</span>
                </div>
            ))}
          </div>
        </div>
        <div className="buttons">
            <button className="button is-small" onClick={() => setIsOpen(true)}>
              Editar
            </button>
            <button className="button is-danger is-small" onClick={
              async () => {
                try {
                  await deleteCard(cardObject.id)
                }
                catch (error) {
                  console.error("Error al eliminar la tarjeta:", error)
                  alert("Error al eliminar la tarjeta")
                }
              }}>
              Eliminar
            </button>
        </div>
        <EditCardForm card={cardObject} isOpen={isOpen} closeController={() => setIsOpen(false)} />
      </div>
    </div>
  );
}

export default Card;