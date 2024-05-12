import { updateBattery } from "./battery";
import { updateOdometer } from "./odometer";
import { updateSpeed } from "./speed";
import { updateCoolingLiquid } from "./coolingLiquid";

export const COMPONENTS_ACTIONS = {
    battery: {
        update: updateBattery
    },
    odometer: {
        update: updateOdometer
    },
    speed: {
        update: updateSpeed
    },
    coolingLiquid: {
        update: updateCoolingLiquid
    },
};

export const MONITORING_UPDATE = 'monitoring/update';

export const updateMonitoring = value => ({
    type: MONITORING_UPDATE,
    payload: value,
});