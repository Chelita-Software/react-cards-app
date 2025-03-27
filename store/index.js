import { create } from 'zustand'

import { deleteCard, editCard, getCards, saveCard } from '../api/index.js'

const useCardsStore = create((set, getState) => ({
    cards: [],
    fetchCards: async () => {
      const cards = await getCards()
      set({cards: cards})
    },
    editCard: async (card) => {
      await editCard(card)
      set((state) => ({
        cards: state.cards.map(c => c.id === card.id ? card : c)
      }))
    },
    saveCard: async (card) => {
      await saveCard(card)
      //set((state) => ({
      //  cards: [...state.cards, card]
      //}))
    },
    deleteCard: async (cardId) => {
      console.log("Deleting")
      console.log(cardId)
      await deleteCard(cardId)
      await getState().fetchCards()
    },
  }))

export default useCardsStore
