import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

    imgName = imgName.replace('img/', '/assets/');

    return (
        <>
            <div className="data-card" onClick={handleOpen}>
                <h3>{ name }</h3>
                <img src={ imgName } alt={name} />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        { name }
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} dangerouslySetInnerHTML={{__html: description}}>
                    </Typography>
                    <img src={ imgName } alt={name} style={{ display: 'block', margin: 'auto', width: '100px' }} />
                </Box>
            </Modal>
        </>
    );
}