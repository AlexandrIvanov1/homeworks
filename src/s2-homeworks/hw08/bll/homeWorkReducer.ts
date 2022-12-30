import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const stateCopy = [...state]
            stateCopy.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name > b.name ? 1 : -1
                } else {
                    return a.name > b.name ? -1 : 1
                }
            })
            return stateCopy
        }
        case 'check': {
            return state.filter(u => u.age > 18).sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}