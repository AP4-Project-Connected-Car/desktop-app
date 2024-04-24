import { useEffect, useState } from 'react';

import Alert from '@mui/material/Alert';

import SignalCard from './SignalCard';

import * as config from '../../../config.json';

export default function Signals() {
    const [signalsList, setSignalsList] = useState([]);
    const [isFailed, setIsFailed] = useState(false);

	useEffect(() => {
        const signalsUrl = `${config.api.protocol}://${config.api.hostname}${config.api.path}/signals`;
		fetch(signalsUrl)
            .then(response => response.json())
            .then(data => setSignalsList(data.data))
            .catch(err => {
                console.error(err);
                setIsFailed(true);
            });
	}, []);

    return (
        <div className="signals">
            <h1>Signals</h1>
            <main>
                { !isFailed ? signalsList.map(signal => (
					<SignalCard {...signal} key={signal._id} />
				)) : 
                    <div className="error-div">
                        <Alert variant="filled" severity="error">An error has occured when trying accessing data.</Alert>
                    </div>
                }
            </main>
        </div>
    );
} 
