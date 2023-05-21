import "../styles/NumberFactApp.css"
import { useState } from "react"
import { MyModal } from "./MyModal.jsx"
import { ChipList } from "./ChipList.jsx"
import { FactResult } from "./FactResult.jsx"

export const NumberFactApp = () => {


    const [ likedNumbersList, setLikedNumberList ] = useState([])
    const [ numberExists, setNumberExists ] = useState(false)
     
    const addToLikedList = (numberToAdd) => {

        const number = numberToAdd.split(" ")[0]
        if (!likedNumbersList.some( (numObject) => numObject.id === number)) {
            const newNumber = {
                id: number,
                content: numberToAdd.slice(number.length + 1)
            }
            setLikedNumberList([...likedNumbersList, newNumber])
        } else {
            setNumberExists(true)
        }
    }
    
    const removeFromLikedList = (numberToRemove) => {
        setLikedNumberList(
            likedNumbersList.filter( 
                (likedNumber) => {
                    return likedNumber.id !== numberToRemove.id
                }
            )
        )
    }

    return(   
        <div className="lala" style={ {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center"
        } }>
            {
                numberExists 
                && 
                <MyModal 
                    setNumberExists= { setNumberExists } 
                    color={'red'} 
                    title={"This number already exists"}
                    text={`You cannot save the same number twice. Please try again.`}
                    context={"numExists"}
                />
            }
            <h1 style={{
                marginBottom: "1em"
            }}>Welcome to Numbers Facts!</h1>
            <FactResult
                addToLikedList={ addToLikedList }
            />
            {
                likedNumbersList.length > 0 
                && 
                <ChipList 
                    likedNumbersList={ likedNumbersList }
                    removeFromLikedList={ removeFromLikedList }
                />
            }
        </div>
    )
}