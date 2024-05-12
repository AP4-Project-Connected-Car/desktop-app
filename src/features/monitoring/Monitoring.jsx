import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateMonitoring } from '../../app/actions/monitoring/global';

import Alert from '@mui/material/Alert';

import Battery from './cardTypes/Battery';
import Odometer from './cardTypes/Odometer';
import SpeedometerCard from './cardTypes/SpeedometerCard';
import Temperature from './cardTypes/Temperature';

import * as config from '../../../config.json';
const SERVER_HOSTNAME = window.location.hostname;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function Monitoring() {
    const dispatch = useDispatch();

    // Define states
    const monitoringData = useSelector(state => state.monitoring);
    const [isFailed, setIsFailed] = useState(false);

    // Which component to use
    const dataTypes = {
        "battery": Battery,
        "odometer": Odometer,
        "speed": SpeedometerCard,
        "coolingLiquid": Temperature
    };

    const updateData = async () => {
        try {
            const monitoringDataUrl = `${config.api.protocol}://${SERVER_HOSTNAME}:${config.api.port}${config.api.path}/monitoring`;
            const response = await fetch(monitoringDataUrl);
            const data = await response.json();
            dispatch(updateMonitoring(data));
        } catch (err) {
            console.error(err);
            setIsFailed(true);
        }
    };

    useEffect(() => {
        updateData();
    }, []);

    return (
        <div className="monitoring">
            <h1>Monitoring</h1>
            <main>
                { !isFailed ? Object.entries(monitoringData).map(([compKey, comp], idx) => {
                    const Component = dataTypes[compKey];
					return <Component cardTitle={comp.name} cardValue={comp.value} cardUnit={comp.unit} key={idx} />
                }) : 
                    <div className="error-div">
                        <Alert variant="filled" severity="error">An error has occured when trying accessing data.</Alert>
                    </div>
                }
            </main>
        </div>
    );
}
