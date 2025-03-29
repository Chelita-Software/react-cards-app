async function getCards() {
    const response = await fetch("http://localhost:8001/cards", {
        method: "GET",
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const cards = await response.json()
    return cards
}

async function saveCard(card) {
    console.log(card)
    const response = await fetch("http://localhost:8001/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const resp = await response.json()
    return resp
}

async function editCard(card) {
    const response = await fetch(`http://localhost:8001/cards/${card.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const resp = await response.json()
    return resp
}

async function deleteCard(cardId) {
    const response = await fetch(`http://localhost:8001/cards/${cardId}`, {
        method: "DELETE",
    })
    if (!response.ok) {
        throw new Error("Error fetching cards");
    }
    const resp = await response.json()
    return resp
}

export { editCard, getCards, saveCard, deleteCard }