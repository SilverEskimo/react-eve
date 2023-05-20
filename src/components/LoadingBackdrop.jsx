import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export const LoadingBackdrop = ({open}) => {
  
    return (
        <div>        
            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress sx={{color: "white"}} />
            </Backdrop>
        </div>
    );
}