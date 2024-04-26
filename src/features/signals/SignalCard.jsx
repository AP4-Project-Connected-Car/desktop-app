import { useState } from 'react';

import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    paddingBottom: 1
};

export default function SignalCard({ name, description, imgName }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    imgName = imgName.replace('img/', '/');

    return (
        <>
            <div className="data-card" onClick={handleOpen}>
                <h3>{ name }</h3>
                <img src={ imgName } alt={name} />
            </div>
            
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    { name }
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom dangerouslySetInnerHTML={{__html: description}}></Typography>
                    <img src={ imgName } alt={name} style={{ display: 'block', margin: 'auto', width: '100px' }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}