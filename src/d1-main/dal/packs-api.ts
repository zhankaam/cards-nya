import {instance} from "./api";


export const packsAPI = {
    getPacks(page?: number, pageCount?: number, max?: number,
             min?: number, packName?: string, user_id?: string) {
        return instance.get<getPacksResponseType>(`/cards/pack?page=${page}&pageCount=${pageCount}&packName=${packName}&max=${max}&min=${min}&user_id=${user_id}`)
    },
    addPack(cardsPack: cardPacksType) {
        return instance.post(`/cards/pack`, {cardsPack})
    },
    deletePack(id: string) {
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(cardsPack: cardPacksType) {
        return instance.put(`/cards/pack`, {cardsPack})
    }
}


export type getPacksResponseType = {
    cardPacks: cardPacksType[],
    cardPacksTotalCount: number	// количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number 		// выбранная страница
    pageCount: number  // количество элементов на странице
}

export type cardPacksType = {
    _id: string
    user_id: string
    name: string
    path: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: string
    __v: number
    created: string
    updated: string
}