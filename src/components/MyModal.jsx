import "../styles/MyModal.css"
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


export const MyModal = ({ setNumberExists, color, title, text, context, setChipFilled }) => {
        
    const [ open, setOpen ] = useState(true);
    
    const handleClose = () => {
        if (context === "numExists"){
            setNumberExists(false)
        } else if (context === "chipItem") {
            setChipFilled(false)
        }
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="myModal" sx={{
                    border: `solid 1px ${color}`,
                    bgcolor: 'background.paper',
                    p: 6
                    }
                }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        { title }
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        { text } 
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}