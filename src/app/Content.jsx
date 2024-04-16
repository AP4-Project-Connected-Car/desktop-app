import NavBar from './NavBar';

export default function Content({ pageIdx, children }) {
    return (
        <>
            { children }
            <NavBar pageIdx={pageIdx} />
        </>
    );
}