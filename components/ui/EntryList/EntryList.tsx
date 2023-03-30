import { List, ListItem, Paper } from '@mui/material';
import React, { useMemo } from 'react';
import { EntryCard } from '../EntryCard';
import { EntryStatus } from '../../../interfaces/entry';
import { useContext } from 'react';
import { EntriesContext } from '../../../context/entries/EntriesContext';

export interface EntryListProps {
	status: EntryStatus;
}

const EntryList: React.FC<EntryListProps> = ({ status }) => {
	const { entries } = useContext(EntriesContext);

	const filteredEntries = useMemo(
		() => entries.filter(entry => entry.status === status),
		[entries, status]
	);

	return (
		<div>
			<Paper
				elevation={0}
				sx={{
					height: 'calc(100vh - 100px',
					overflow: 'scroll',
					backgroundColor: 'transparent',
					padding: 2,
					'&::-webkit-scrollbar': { display: 'none' },
				}}>
				<List>
					{filteredEntries.map(entry => (
						<EntryCard key={entry.id} entry={entry} />
					))}
				</List>
			</Paper>
		</div>
	);
};

export default EntryList;
