import { create } from 'zustand'

import { deleteCard, editCard, getCards, saveCard } from '../api/index.js'

const useCardsStore = create((set, getState) => ({
    cards: [],
    error: null,
    fetchCards: async () => {
      try {
        const cards = await getCards()
        set({cards: cards})
      } catch (error) {
        console.error("Error al cargar las tarjetas:", error)
        set({error: "Error al cargar las tarjetas"})
      }
    },
    editCard: async (card) => {
      await editCard(card)
      await getState().fetchCards()
    },
    saveCard: async (card) => {
      await saveCard(card)
      await getState().fetchCards()
    },
    deleteCard: async (cardId) => {
      console.log(cardId)
      await deleteCard(cardId)
      await getState().fetchCards()
    },
  }))

export default useCardsStore
