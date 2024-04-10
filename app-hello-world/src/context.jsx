import React from "react"



export const storeData = {
    cart: [],
    products: [],
    profileUser: {}
}


const appContext = React.createContext(storeData);

export default appContext;