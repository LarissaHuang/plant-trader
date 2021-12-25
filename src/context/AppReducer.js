export default (state, action) => {
    // reducer is a way to change your state and send it down to your component
    switch (action.type) {
        case 'DELETE_PLANT':
            return {
                ...state,
                plants: state.plants.filter(plant => plant.id !== action.payload)
            }
        case 'ADD_PLANT':
            return {
                ...state,
                plants: [action.payload, ...state.plants]
            }
        default:
            return state;
    }
}