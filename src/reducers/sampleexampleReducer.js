
let initialState = {
    count: 0
}

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: action.payload };
        case "DECREMENT":
            return { ...state, count: action.payload };
        default:
            return state;
    }
}

export default exampleReducer;