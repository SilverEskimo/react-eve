import { ChipItem } from "./ChipItem"


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
            <div style={ {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "2em",
                justifyContent: "center"
            }}>  
                { likedNumbers }
            </div>
        </>
        
    )
}