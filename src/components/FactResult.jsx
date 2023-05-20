import axios from "axios"
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { LoadingBackdrop } from "./LoadingBackdrop";


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
            <div style={ {width: "200px", margin: "auto", marginBottom: "1em"} }>
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
                <div style={ {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: "1em",
                    paddingBottom: "2em",
                    borderBottom: "solid 0.5px grey"
                }}>
                    <p style={{ margin: "auto" }}>
                        { factResult }
                    </p>
                    <IconButton 
                        type="submit"
                        onClick={ () => addToLikedList(factResult) }
                        style={{
                            marginLeft: "auto",
                            border: "none",
                            backgroundColor: "white"
                        }}>
                        <ThumbUpOutlinedIcon color='primary'/>
                    </IconButton>
                </div>
            }       
        </>   
    )
}