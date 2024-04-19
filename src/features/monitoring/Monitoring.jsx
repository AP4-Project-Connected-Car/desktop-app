import Battery from './cardTypes/Battery';
import Temperature from './cardTypes/Temperature';

export default function Monitoring() {
    return (
        <div className="monitoring">
            <h1>Monitoring</h1>
            <main>
                <Battery cardTitle="Batterie" cardValue={11.51} />
                <Battery cardTitle="Batterie" cardValue={12.51} />
                <Battery cardTitle="Batterie" cardValue={11} />
                <Temperature cardTitle="Intérieur (°C)" cardValue={0.01} />
                <Temperature cardTitle="Moteur (°C)" cardValue={10.01} />
                <Temperature cardTitle="Extérieur (°C)" cardValue={20.01} />
                <Temperature cardTitle="Frein (°C)" cardValue={30.01} />
                <Temperature cardTitle="Frein (°C)" cardValue={30} />
            </main>
        </div>
    );
}
