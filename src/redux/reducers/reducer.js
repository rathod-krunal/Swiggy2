const INIT_STATE = {
    carts: []
}


export const cartreducer = (state = INIT_STATE,action) => {
    switch(action.type){
        case "ADD_CART" : 
        return {
            ...state,
            carts:[...state.carts,action.payload]
        }
   
        case "REMOVE_CART" : 
        const data = state.carts.filter((e)=> e.id !== action.payload)
        return {
            ...state,
            carts: data
        }
        default: return state
        
    }
}