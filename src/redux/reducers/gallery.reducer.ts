import { Item } from "../../Item";

const galleryReducer = (state: Item[], action: { type: string, payload: { path?: string, description?: string } }) => {
    switch (action.type) {
        case "SET_GALLERY":
            return action.payload;
        case "POST_GALLERY":
            return [...state, action.payload]
        case "PUT_GALLERY":
            let putState = state.map(item => {
                if (item.path === action.payload.path) {
                    return {
                        ...item,
                        description: action.payload.description,
                    }
                } else return item
            })
            return putState;
        case "DELETE_GALLERY":
            return state.filter(item => item.path !== action.payload)
        default:
            return state;
    }
}

export default galleryReducer;