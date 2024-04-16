import { useState } from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Logbook() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="signals">
            <h1>Logbook</h1>

            {/* Add button */}
            <Fab
                color="primary"
                aria-label="add"
                sx={{ position: 'fixed', right: 20, bottom: 80 }}
                onClick={handleClickOpen}>
                <AddIcon />
            </Fab>

            {/* Add modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log(formJson);
                        handleClose();
                    }
                }}>
                <DialogTitle>New log</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="object"
                        name="object"
                        label="Object"
                        type="text"
                        fullWidth
                        variant="outlined" />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Content"
                        multiline
                        rows={10} sx={{ marginTop: 1 }}
                        fullWidth={true} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
} 
