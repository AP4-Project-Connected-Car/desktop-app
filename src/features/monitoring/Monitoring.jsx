import { useEffect, useState } from 'react';

import Alert from '@mui/material/Alert';

import Battery from './cardTypes/Battery';
import Odometer from './cardTypes/Odometer';
import SpeedometerCard from './cardTypes/SpeedometerCard';
import Temperature from './cardTypes/Temperature';

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
            const response = await fetch("https://albion-portaler-api-a7b10e63cc73.herokuapp.com/monitoring");
            const data = await response.json();
            console.log(data);
            const newData = [];
            for (const compName in data)
                newData.push({
                    component: dataTypes[compName],
                    ...data[compName]
                });
            console.log(newData);
            setData(newData);
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
