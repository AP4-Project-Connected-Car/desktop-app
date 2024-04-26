import { useState } from 'react';

import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import BuildIcon from '@mui/icons-material/Build';

import * as config from '../../../config.json';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4
};

function getLogoFromId(id) {
    switch (id) {
        case 0:
            return TextSnippetIcon;
        case 1:
            return BuildIcon;
        default:
            return TextSnippetIcon;
    }
}

export default function LogCard({ object, createdAt, content, type }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const configType = config.logbook.types[type];
    const Logo = getLogoFromId(configType.id);
    const date = new Date(createdAt).toLocaleDateString();

    return (
        <>
            <div className="data-card" onClick={handleOpen}>
                <section>
                    <h3>{ object }</h3>
                    <h6>{ date }</h6>
                </section>
                <Logo color='primary' fontSize='large' />
            </div>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    { object }
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
                    <h6 style={{textAlign: 'left', fontStyle: 'italic', margin: 0}}>{ date }</h6>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} dangerouslySetInnerHTML={{__html: content}}>
                    </Typography>
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