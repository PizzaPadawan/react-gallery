const galleryReducer = (state, action) => {
    switch (action.type) {
        case "SET_GALLERY":
            return action.payload;
        case "POST_GALLERY":
            return [...action.payload, state]
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