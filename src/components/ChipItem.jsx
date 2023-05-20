import { useState } from 'react';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyModal } from './MyModal';


export const ChipItem = ( {number, removeFromLikedList } ) => {

    const [ chipFilled, setChipFilled ] = useState(false)
    
    const handleChipClick = () => {
        setChipFilled( (current) => !current )
    }

    return(
        <div style={{ marginBottom: "1em", marginRight: "1em"}}>
            <Chip
                label={number.id}
                key={number.id}
                variant= { chipFilled ? "filled": "outlined" }
                color="primary"
                deleteIcon={ <DeleteIcon /> }
                onClick={ handleChipClick }
                onDelete={ () => removeFromLikedList(number) }
                clickable
            />
            {
                chipFilled 
                &&
                <MyModal 
                    color={"blue"}
                    title={`Number: ${number.id}`}
                    text={`${number.id} ${number.content}`}
                    setChipFilled={ setChipFilled }
                    context={"chipItem"}
                />
            }
        </div>    
    )
}