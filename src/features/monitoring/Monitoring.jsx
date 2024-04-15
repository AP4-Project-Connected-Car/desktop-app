import Battery from './cardTypes/Battery';

export default function Monitoring() {
    return (
        <main className="monitoring">
            <Battery cardTitle="Batterie" cardValue={11} />
            <Battery cardTitle="Batterie" cardValue={11.5} />
            <Battery cardTitle="Batterie" cardValue={12.5} />
            <Battery cardTitle="Batterie" cardValue={13} />
        </main>
    );
}
