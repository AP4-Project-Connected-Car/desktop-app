import { useState, useEffect } from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';

import LogForm from './LogForm';
import LogCard from './LogCard';

export default function Logbook() {
    const [open, setOpen] = useState(false);
    const [logs, setLogs] = useState([]);
    const [isFailed, setIsFailed] = useState(false);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function loadLogs() {
		try {
			const response = await fetch(`http://${window.location.hostname}:8080/logbook`);
			const data = await response.json();
			setLogs(data);
		} catch (err) {
			console.error(err);
            setIsFailed(true);
		}
	}

    useEffect(() => {
		loadLogs();
	}, []);

    return (
        <div className="logbook">
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
                        formJson.type = Number(formJson.type);
                        console.log(formJson);
                        fetch(`http://${window.location.hostname}:8080/logbook`, {
                            method: 'POST',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formJson)
                        })
                            .then(loadLogs)
                            .catch(err => console.error(err));
                        handleClose();
                    }
                }}>
                <LogForm closeModal={handleClose} />
            </Dialog>

            {/* Log list */}
            <main>
                {  }
                { !isFailed
                     ?
                    logs.map(log => <LogCard {...log} key={log._id} />)
                     : 
                    <div className="error-div">
                        <Alert variant="filled" severity="error">An error has occured when trying accessing data.</Alert>
                    </div>
                }
            </main>
        </div>
    );
} 
