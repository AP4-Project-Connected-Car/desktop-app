import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import * as config from '../../../config.json';

export default function LogForm({ closeModal }) {
    const [logType, setLogType] = useState(0);
    const handleTypeChange = (event) => setLogType(event.target.value);

    return (
        <>
            <DialogTitle>New log</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="normal"
                    id="object"
                    name="object"
                    label="Object"
                    type="text"
                    fullWidth
                    variant="outlined" />
                <FormControl fullWidth required>
                    <InputLabel id="log-type">Type</InputLabel>
                    <Select
                        labelId="log-type"
                        id="log-type-select"
                        value={logType}
                        label="Type"
                        onChange={handleTypeChange}
                        name="logType"
                        defaultValue={0}>
                        { config.logbook.types.map(configType => <MenuItem key={configType.id} value={configType.id}>{configType.name}</MenuItem>) }
                    </Select>
                    </FormControl>
                <TextField
                    required
                    id="outlined-multiline-static"
                    label="Content" name='content'
                    multiline
                    rows={10} sx={{ marginTop: 1 }}
                    fullWidth={true}
                    margin="normal" />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </>
    );
}