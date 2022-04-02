

const initState = [];

export const productReducer = (state=initState , action)=>{

    switch (action.type) {
        case "GET_PRODUCTS":
            
            return [...action.payload] ;
    
        default:
            return state ;
    }
}