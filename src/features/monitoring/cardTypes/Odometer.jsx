import { GiCarWheel } from "react-icons/gi";

import DataCard from './DataCard';

export default function Odometer({ cardValue }) {
    const infoColor = "#0288d1";

    return (
        <DataCard className="odometer-data">
            <div className="line-1">
                <GiCarWheel size={'5em'} color={ infoColor } />
            </div>
            <div className="line-2">
                <div className="data-div">{cardValue} km</div>
            </div>
        </DataCard>
    );
}
