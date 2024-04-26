import { useEffect, useState } from 'react';

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
    const [data, setData] = useState([]);
    const [isFailed, setIsFailed] = useState(false);

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
            const newData = [];
            for (const compName in data)
                newData.push({
                    component: dataTypes[compName],
                    ...data[compName]
                });
            setData(newData);

            await sleep(3000);
            await updateData();
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
                { !isFailed ? data.map((comp, idx) => (
					<comp.component cardTitle={comp.name} cardValue={comp.value} cardUnit={comp.unit} key={idx} />
				)) : 
                    <div className="error-div">
                        <Alert variant="filled" severity="error">An error has occured when trying accessing data.</Alert>
                    </div>
                }
            </main>
        </div>
    );
}
