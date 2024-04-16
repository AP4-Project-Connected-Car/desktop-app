import { Routes, Route } from 'react-router-dom';

import Content from './Content';
import Monitoring from '../features/monitoring/Monitoring';
import Signals from '../features/signals/Signals';
import Logbook from '../features/logbook/Logbook';

export default function Navigator() {
    return (
        <Routes>
            <Route path="/" element={<Content pageIdx={0}><Monitoring /></Content>} />
            <Route path="/signals" element={<Content pageIdx={1}><Signals /></Content>} />
            <Route path="/logbook" element={<Content pageIdx={2}><Logbook /></Content>} />
        </Routes>
    );
}
