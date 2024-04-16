import { useEffect, useState } from 'react';
import SignalCard from './SignalCard';

export default function Signals() {
    const [signalsList, setSignalsList] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/signals')
            .then(response => response.json())
            .then(data => setSignalsList(data));
	}, []);

    return (
        <div className="signals">
            <h1>Signals</h1>
            <main>
                { signalsList.map(signal => (
					<SignalCard {...signal} key={signal.id} />
				)) }
            </main>
        </div>
    );
} 
