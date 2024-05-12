import { MONITORING_UPDATE } from './actions/monitoring/global.js';
import { MONITORING_UPDATE_BATTERY } from './actions/monitoring/battery.js';
import { MONITORING_UPDATE_ODOMETER } from './actions/monitoring/odometer.js';
import { MONITORING_UPDATE_SPEED } from './actions/monitoring/speed.js';
import { MONITORING_UPDATE_COOLINGLIQUID } from './actions/monitoring/coolingLiquid.js';

const defaultState = {
	monitoring: {
		battery: {
			name: "Battery",
			value: 11.5,
			unit: "V"
		},
		odometer: {
			name: "Odometer",
			value: 0,
			unit: "km"
		},
		speed: {
			name: "Speed",
			value: 0,
			unit: "km/h"
		},
		coolingLiquid: {
			name: "Cooling Liquid",
			value: 30,
			unit: "°C"
		}
	}
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case MONITORING_UPDATE:
			return {
				...state,
				monitoring: action.payload,
			};
		case MONITORING_UPDATE_BATTERY:
			return {
				...state,
				monitoring: {
					...state.monitoring,
					battery: {
						...state.monitoring.battery,
						value: action.payload
					}
				},
			};
		case MONITORING_UPDATE_ODOMETER:
			return {
				...state,
				monitoring: {
					...state.monitoring,
					odometer: {
						...state.monitoring.odometer,
						value: action.payload
					}
				},
			};
		case MONITORING_UPDATE_SPEED:
			return {
				...state,
				monitoring: {
					...state.monitoring,
					speed: {
						...state.monitoring.speed,
						value: action.payload
					}
				},
			};
		case MONITORING_UPDATE_COOLINGLIQUID:
			return {
				...state,
				monitoring: {
					...state.monitoring,
					coolingLiquid: {
						...state.monitoring.coolingLiquid,
						value: action.payload
					}
				},
			};
		default:
		  	return state;
	}
}
