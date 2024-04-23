import { useEffect, useState } from 'react';

import Chip from '@mui/material/Chip';
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import WifiFindIcon from '@mui/icons-material/WifiFind';

import WebsocketConnection from '../../utils/WebsocketConnection';

export default function WebsocketCard() {
    const [cardStyle, setCardStyle] = useState('pending');

    // Card styles
    const styles = {
        "success": {
            color: "success",
            icon: WifiIcon,
            variant: "outlined",
            disabled: false
        },
        "pending": {
            color: 'default',
            icon: WifiFindIcon,
            variant: "outlined",
            disabled: true
        },
        "error": {
            color: 'error',
            icon: WifiOffIcon,
            variant: "filled",
            disabled: false
        }
    }

    // Init WS instance and events
    const ws = new WebsocketConnection();
    ws.events.error = e => {
        console.error(e);
        setCardStyle('error');
    }
    ws.events.open = () => {
        setCardStyle('success');
        console.log("WS connected");
    }
    ws.events.close = () => {
        setCardStyle('pending');
        ws.reset();
    }

    // Connect and restart functions
    const connect = async () => {
        await ws.init();
        await ws.connect();
    };
    const newConnection = () => {
        connect()
            .then(() => setCardStyle('success'))
            .catch(err => {
                console.error(err);
                setCardStyle('error');
            });
    };
    const restartConnection = () => {
        ws.reset();
        newConnection();
    }

    // Start connection on load
    useEffect(newConnection, []);

    const style = styles[cardStyle];
    return (
        <div className="ws-card-container">
            <Chip label="185.223.151.250" disabled={style.disabled} color={style.color} icon={<style.icon />} variant={style.variant} sx={{ borderWidth: 2 }} onClick={restartConnection} />
        </div>
    );
}