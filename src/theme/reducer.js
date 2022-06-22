import { createContext } from 'react'

const initial = {
    title: 'Title',
    description: 'Deskripsi',
    urlToImage: null,
    link: '/blog/0'
}
const News = createContext(initial)

const reducer = (state = initial, action) => {
    switch (action.type) {
        case 'DETAIL':
            return { state: action.news }
        default:
            return {state}
    }
}

export {
    News,
    reducer,
    initial
}