import { useState } from 'react';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';

import LogForm from './LogForm';
import LogCard from './LogCard';

export default function Logbook() {
    const [open, setOpen] = useState(false);
    const [logs, setLogs] = useState([
        {id: 0, date: '16-04-2024', object: 'Test 1', type: 0, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit esse veritatis rerum officiis officia. Explicabo minima nesciunt debitis, totam eum maxime sequi doloribus blanditiis delectus est quod? In, maxime?'},
        {id: 1, date: '16-04-2024', object: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit esse veritatis rerum officiis officia. Explicabo minima nesciunt debitis, totam eum maxime sequi doloribus blanditiis delectus est quod? In, maxime?', type: 1, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit esse veritatis rerum officiis officia. Explicabo minima nesciunt debitis, totam eum maxime sequi doloribus blanditiis delectus est quod? In, maxime?'},
        {id: 2, date: '16-04-2024', object: 'Test 2', type: 0, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit esse veritatis rerum officiis officia. Explicabo minima nesciunt debitis, totam eum maxime sequi doloribus blanditiis delectus est quod? In, maxime?'},
        {id: 3, date: '16-04-2024', object: 'Test 3', type: 1, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio impedit esse veritatis rerum officiis officia. Explicabo minima nesciunt debitis, totam eum maxime sequi doloribus blanditiis delectus est quod? In, maxime?'},
    ]);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        console.log(formJson);
                        handleClose();
                    }
                }}>
                <LogForm closeModal={handleClose} />
            </Dialog>

            {/* Log list */}
            <main>
                { logs.map(log => <LogCard {...log} key={log.id} />) }
            </main>
        </div>
    );
} 
