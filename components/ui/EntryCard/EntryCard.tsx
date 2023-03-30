import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';
import React from 'react';
import { Entry } from '../../../interfaces/entry';

export interface EntryCardProps {
	entry: Entry;
}

const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
	return (
		<Card sx={{ padding: 1, marginBottom: 2 }} variant='outlined'>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant='caption'>Created at {entry.createdAt}</Typography>
					<Typography variant='caption'>Updated at</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default EntryCard;
