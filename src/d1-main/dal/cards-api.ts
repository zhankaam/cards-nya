import {instance} from "./api";


export const cardsAPI = {
    getCards(cardsPack_id: string) {
        return instance.get(`/cards/?cardsPack_id=${cardsPack_id}`)
    },
    addCard(cards: cardType) {
        return instance.post(`/cards/card`, {cards})
    },
    deleteCard(id: string) {
        return instance.delete(`/cards/card?id=${id}`)
    },
    updateCard(cards: cardType) {
        return instance.put(`/cards/card`, {cards})
    }
}

export type cardType = {
    cardsPack_id: string
    question: string
    answer: string
    grade: number
    shots: number
    rating: number
    answerImg: string
    questionImg: string
    questionVideo: string
    answerVideo: string
    type: string

}