import * as config from '../../../../config.json';

import BatteryAlertRoundedIcon from '@mui/icons-material/BatteryAlertRounded';
import BatteryCharging20RoundedIcon from '@mui/icons-material/BatteryCharging20Rounded';
import BatteryCharging30RoundedIcon from '@mui/icons-material/BatteryCharging30Rounded';
import BatteryCharging50RoundedIcon from '@mui/icons-material/BatteryCharging50Rounded';
import BatteryCharging60RoundedIcon from '@mui/icons-material/BatteryCharging60Rounded';
import BatteryCharging80RoundedIcon from '@mui/icons-material/BatteryCharging80Rounded';
import BatteryCharging90RoundedIcon from '@mui/icons-material/BatteryCharging90Rounded';
import BatteryChargingFullRoundedIcon from '@mui/icons-material/BatteryChargingFullRounded';

import DataCard from './DataCard';

function getBatteryComponentFromState(state) {
    if (state <= 0) return BatteryAlertRoundedIcon;
    else if (state <= 20) return BatteryCharging20RoundedIcon;
    else if (state <= 30) return BatteryCharging30RoundedIcon;
    else if (state <= 50) return BatteryCharging50RoundedIcon;
    else if (state <= 60) return BatteryCharging60RoundedIcon;
    else if (state <= 80) return BatteryCharging80RoundedIcon;
    else if (state <= 90) return BatteryCharging90RoundedIcon;
    else if (state >= 100) return BatteryChargingFullRoundedIcon;
}

export default function Battery({ cardTitle, cardValue, cardUnit }) {
    let BatteryComponent = BatteryAlertRoundedIcon;
    let batteryColor = 'error';

    const batteryIntervals = config.components.battery.intervals;

    // Choose which icon to display
    if (cardValue <= batteryIntervals[0].value && cardValue >= batteryIntervals[batteryIntervals.length - 1].value) {
        for (let i = batteryIntervals.length - 1; i >= 0; i--) {
            if (cardValue <= batteryIntervals[i].value) {
                BatteryComponent = getBatteryComponentFromState(batteryIntervals[i].state);
                batteryColor = batteryIntervals[i].color;
                break;
            }
        }
    }

    return (
        <DataCard className="battery-data">
            <div className="line-1">
                <h3>{cardTitle} :</h3>
            </div>
            <div className="line-2">
                <div className="battery-container">
                    <BatteryComponent sx={{ fontSize: 100 }} color={ batteryColor } />
                </div>
                <div className="data-div">{cardValue} {cardUnit}</div>
            </div>
        </DataCard>
    );
}
