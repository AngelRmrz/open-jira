import { UIState } from './';

type UIActionType =
	| { type: 'UI - Open Sidebar' }
	| { type: 'UI - Close Sidebar' }
	| { type: 'UI - IsAddingEntry'; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case 'UI - Open Sidebar':
			return {
				...state,
				sidemenuOpen: true,
			};

		case 'UI - Close Sidebar':
			return {
				...state,
				sidemenuOpen: false,
			};

		case 'UI - IsAddingEntry':
			return {
				...state,
				isAddingEntry: action.payload,
			};

		default:
			return state;
	}
};
