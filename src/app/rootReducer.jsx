const defaultState = {
	list: [],
};

export default function reducer(state = defaultState, action) {
	if (action.type === 'list/fulfilled') return { ...state, list: action.list };

	return state;
}
