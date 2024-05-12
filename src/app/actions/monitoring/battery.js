export const MONITORING_UPDATE_BATTERY = 'monitoring/battery/update';

export const updateBattery = value => ({
    type: MONITORING_UPDATE_BATTERY,
    payload: value,
});