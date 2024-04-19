import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        { object }
                    </Typography>
                    <h6 style={{textAlign: 'left', fontStyle: 'italic', margin: 0}}>{ date }</h6>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} dangerouslySetInnerHTML={{__html: content}}>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}