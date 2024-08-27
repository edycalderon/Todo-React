import React from "react";
function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue)
    const [loanding, setLoanding] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;
                if(!localStorageItem){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                }else{
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }
                setLoanding(false)
            }catch(error){
                setLoanding(false)
                setError(true)
            }
        }, 2000);
    }, )
    
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }
    return {
        item,
        saveItem,
        loanding,
        error
    }
}

export { useLocalStorage }