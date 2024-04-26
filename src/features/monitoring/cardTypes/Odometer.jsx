import { GiCarWheel } from "react-icons/gi";

import DataCard from './DataCard';

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function Odometer({ cardValue, cardUnit }) {
    const infoColor = "#0288d1";
    cardValue = numberWithSpaces(cardValue);

    return (
        <DataCard className="odometer-data">
            <div className="line-1">
                <GiCarWheel size={'4em'} color={ infoColor } />
            </div>
            <div className="line-2">
                <div className="data-div">{cardValue} {cardUnit}</div>
            </div>
        </DataCard>
    );
}
