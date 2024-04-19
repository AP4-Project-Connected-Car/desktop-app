import * as config from '../../../../config.json';

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

import DataCard from './DataCard';

export default function Temperature({ cardTitle, cardValue, cardUnit }) {
    let iconColor = 'error';

    const iconColors = config.components.temperature.colors;

    // Choose which color to use
    if (cardValue >= iconColors[0].value) iconColor = iconColors[0].color;
    else {
        for (let i = iconColors.length - 1; i >= 0; i--) {
            if (cardValue <= iconColors[i].value) {
                iconColor = iconColors[i].color;
                break;
            }
        }
    }

    return (
        <DataCard className="temperature-data">
            <div className="line-1">
                <h3>{cardTitle} :</h3>
            </div>
            <div className="line-2">
                <div className="temperature-container">
                    <DeviceThermostatIcon sx={{ fontSize: 100 }} color={ iconColor } />
                </div>
                <div className="data-div">{cardValue} {cardUnit}</div>
            </div>
        </DataCard>
    );
}
