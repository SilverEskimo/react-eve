import { ChipItem } from "./ChipItem"
import "../styles/ChipList.css"


export const ChipList = ( {likedNumbersList, removeFromLikedList} ) => {
        
    const likedNumbers = likedNumbersList.map( (number) => {    
        return(
            <>
                <ChipItem 
                    key={ number } 
                    number={ number } 
                    removeFromLikedList={ removeFromLikedList }
                />
            </>
        )
    })

    return (
        <>
            <h3 style={{ marginTop: "2em" }}>Numbers You Liked:</h3>
            <div 
                className="chipList">  
                { likedNumbers }
            </div>
        </>
        
    )
}