import NavBar from './NavBar';
import WebsocketCard from '../features/monitoring/WebsocketCard';

export default function Content({ pageIdx, children }) {
    return (
        <>
            <WebsocketCard />
            { children }
            <NavBar pageIdx={pageIdx} />
        </>
    );
}