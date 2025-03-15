let cards = [
  {
    id: 1,
    titulo: "Tarjeta 1",
    descripcion: "Esta es mi tarjeta de prueba",
    img: "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg",
    tags: ["tag1", "tag2"]
  },
  {
    id: 2,
    titulo: "Tarjeta 2",
    descripcion: "Esta es otra tarjeta de prueba",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWmgdPhex4YqK3NAm0V-9Z5lOe2UIC7YtE6_YRwhkS6CqtwwYQ82jKQncT5rX4HtTSnXw&usqp=CAU",
    tags: ["tag1", "tag2"]
  }
]

async function getCards() {
    // Simulate an API request
    await new Promise(resolve => setTimeout(resolve, 1000))
    return cards
}

async function saveCard(card) {
    // Simulate an API request
    await new Promise(resolve => setTimeout(resolve, 1000))
    cards.push(card)
}

export { getCards, saveCard }