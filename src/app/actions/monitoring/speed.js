export const MONITORING_UPDATE_SPEED = 'monitoring/speed/update';

export const updateSpeed = value => ({
    type: MONITORING_UPDATE_SPEED,
    payload: value,
});