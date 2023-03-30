import { FC, ReactNode, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { EntriesReducer } from './EntriesReducer';
import { Entry } from '../../interfaces/entry';
import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
	entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [
		{
			id: uuidv4(),
			description: 'Content 1 Pendiente',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			id: uuidv4(),
			description: 'Content 2 In progress',
			status: 'in-progress',
			createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
		},
		{
			id: uuidv4(),
			description: 'Content 3 Finished',
			status: 'finished',
			createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
		},
	],
};

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: Entry = {
			id: uuidv4(),
			description,
			status: 'pending',
			createdAt: Date.now(),
		};

		dispatch({
			type: '[Entry] Add-Entry',
			payload: newEntry,
		});
	};

	return (
		<EntriesContext.Provider
			value={{
				...state,
				addNewEntry,
			}}>
			{children}
		</EntriesContext.Provider>
	);
};
