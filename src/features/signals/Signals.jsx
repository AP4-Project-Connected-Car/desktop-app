import { useEffect, useState } from 'react';

import Alert from '@mui/material/Alert';

import SignalCard from './SignalCard';

export default function Signals() {
    const [signalsList, setSignalsList] = useState([]);
    const [isFailed, setIsFailed] = useState(false);

	useEffect(() => {
		fetch(`https://albion-portaler-api-a7b10e63cc73.herokuapp.com/signal`)
            .then(response => response.json())
            .then(data => setSignalsList(data))
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
					<SignalCard {...signal} key={signal.id} />
				)) : 
                    <div className="error-div">
                        <Alert variant="filled" severity="error">An error has occured when trying accessing data.</Alert>
                    </div>
                }
            </main>
        </div>
    );
} 
