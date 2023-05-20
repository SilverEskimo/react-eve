import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


export const MyModal = ({ setNumberExists, color, title, text, context, setChipFilled }) => {
        
    const [ open, setOpen ] = useState(true);
    
    const handleClose = () => {
        if(context === "numExists"){
            setNumberExists(false)
        } else if(context === "chipItem") {
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
                <Box sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    border: `solid 1px ${color}`,
                    borderRadius: '10px',
                    boxShadow: 24,
                    p: 6,
                }}>
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