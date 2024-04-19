import Battery from './cardTypes/Battery';
import Odometer from './cardTypes/Odometer';
import SpeedometerCard from './cardTypes/SpeedometerCard';
import Temperature from './cardTypes/Temperature';

export default function Monitoring() {
    return (
        <div className="monitoring">
            <h1>Monitoring</h1>
            <main>
                <SpeedometerCard cardTitle="Speed" cardValue={130} />
                <Battery cardTitle="Battery" cardValue={11.51} />
                <Temperature cardTitle="Outside" cardValue={30.01} />
                <Odometer cardValue={"300 000"} />
            </main>
        </div>
    );
}
