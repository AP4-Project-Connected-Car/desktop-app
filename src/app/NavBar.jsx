import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import BookIcon from '@mui/icons-material/Book';

function getPathFromNavValue(value) {
    switch (value) {
        case 0:
            return '/';
        case 1:
            return '/signals';
        case 2:
            return '/logbook';
        default:
            return '/';
    }
}

export default function NavBar() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                    navigate(getPathFromNavValue(newValue));
                }}
            >
                <BottomNavigationAction label="Monitoring" icon={<TroubleshootIcon />} />
                <BottomNavigationAction label="Signals" icon={<CarCrashIcon />} />
                <BottomNavigationAction label="Logbook" icon={<BookIcon />} />
            </BottomNavigation>
        </Box>
    );
}
