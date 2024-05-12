export const MONITORING_UPDATE_COOLINGLIQUID = 'monitoring/coolingLiquid/update';

export const updateCoolingLiquid = value => ({
    type: MONITORING_UPDATE_COOLINGLIQUID,
    payload: value,
});