import { Item } from "../../Item";

const initialState: Item[] = [];

const galleryReducer = (state: Item[] = initialState, action: { type: string, payload: { id: number, path: string, description: string, likes: number } }) => {
    switch (action.type) {
        case "SET_GALLERY":
            return action.payload;
        case "POST_GALLERY":
            return [...state, action.payload]
        case "PUT_DESCRIPTION":
            let putState = state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        description: action.payload.description,
                    }
                } else return item
            })
            return putState;
        case "PUT_LIKE":
            let pootisState = state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        likes: action.payload.likes
                    }
                } else return item
            })
            return pootisState;
        case "DELETE_GALLERY":
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state;
    }
}

export default galleryReducer;