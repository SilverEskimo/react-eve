import "../styles/FactResult.css"
import axios from "axios"
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { LoadingBackdrop } from "./LoadingBackdrop";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';


export const FactResult = ( { addToLikedList } ) => {

    const [ factResult, setFactResult ] = useState("")
    const [ isLoading, setLoading ] = useState(false)

    const getFact = async () => {
        setLoading(true)
        const result = await axios.get("http://numbersapi.com/random/math")
        setFactResult(result.data.slice(0,-1))
        setLoading(false)
    }

    return(
        <>
            <div className="factResulCtn">
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon />}
                    onClick= { getFact }
                >
                    Get a fact!
                </Button>
                {
                    isLoading && <LoadingBackdrop open={ isLoading }/>
                }
            </div>
            {   
                factResult !== "" 
                && 
                <div className="factResult">
                    <p style={{ margin: "auto" }}>
                        { factResult }
                    </p>
                    <IconButton 
                        type="submit"
                        onClick={ () => addToLikedList(factResult) }>
                        <ThumbUpOutlinedIcon color='primary'/>
                    </IconButton>
                </div>
            }       
        </>   
    )
}