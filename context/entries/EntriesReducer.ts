import { EntriesState } from './';
import { Entry } from '../../interfaces/entry';

type EntriesActionType = { type: '[Entry] Add-Entry'; payload: Entry };

export const EntriesReducer = (state: EntriesState, action: EntriesActionType) => {
	switch (action.type) {
		case '[Entry] Add-Entry':
			return { ...state, entries: [...state.entries, action.payload] };
		default:
			return state;
	}
};
