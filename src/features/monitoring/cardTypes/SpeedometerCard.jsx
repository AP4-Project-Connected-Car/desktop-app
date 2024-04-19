import * as config from '../../../../config.json';

import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks
  } from 'react-speedometer';

import DataCard from './DataCard';

export default function SpeedometerCard({ cardTitle, cardValue }) {
    const speedometerConfig = config.components.speedometer;
    const infoColor = "#0288d1";

    return (
        <DataCard className="speedometer-data">
            <div className="line-1">
                <h3>{cardTitle} :</h3>
            </div>
            <div className="line-2">
                <div className="speedometer-container">
                    <Speedometer
                        value={cardValue}
                        max={speedometerConfig.max}
                        angle={160}
                        fontFamily='roboto'
                        accentColor={infoColor}
                        width={200}
                        height={120}>
                        <Background angle={180} opacity="0"  />
                        <Arc/>
                        <Needle color={infoColor} />
                        <Progress/>
                        <Marks lineColor='#000' />
                    </Speedometer>
                </div>
                <div className="data-div">{cardValue} km/h</div>
            </div>
        </DataCard>
    );
}
