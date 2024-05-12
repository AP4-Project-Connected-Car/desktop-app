export const MONITORING_UPDATE_ODOMETER = 'monitoring/odometer/update';

export const updateOdometer = value => ({
    type: MONITORING_UPDATE_ODOMETER,
    payload: value,
});