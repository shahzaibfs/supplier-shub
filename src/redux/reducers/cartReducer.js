const initState = {
    products:[],
    sum: 0,
    message:""
}

export const cartReducer=(state=initState,action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            const findExistingProduct = state.products.filter(product=>product.productId === action.payload.productId);
            if(findExistingProduct.length){
                return {...state,message:"Product Already Exsist in Shopping Cart "};
            }else{
                return {...state ,products: [...state.products,action.payload] ,message:"Product Added to Shopping Cart"};
            }
            case "REMOVE_FROM_CART":
                console.log(action.payload)
                let newArray = state.products.filter(product=>product.productId !== action.payload.productId)

                return {...state,products:[...newArray],message:"Deleted Succesfully"};
            
        default:
            return state;
    }
}