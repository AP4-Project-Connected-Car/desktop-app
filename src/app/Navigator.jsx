import { Routes, Route } from 'react-router-dom';

import Monitoring from '../features/monitoring/Monitoring';
import Signals from '../features/signals/Signals';
import Logbook from '../features/logbook/Logbook';

export default function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Monitoring />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/logbook" element={<Logbook />} />
        </Routes>
    );
}
