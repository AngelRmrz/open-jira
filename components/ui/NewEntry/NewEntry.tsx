import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState, useContext } from 'react';
import { EntriesContext } from '../../../context/entries/EntriesContext';
import { UIContext } from '../../../context/ui/UIContext';
export interface NewEntryProps {}

const NewEntry: React.FC<NewEntryProps> = () => {
	const [inputValue, setInputValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);
	const { addNewEntry } = useContext(EntriesContext);
	const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

	const onchangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const onSave = () => {
		if (inputValue.length === 0) return;
		addNewEntry(inputValue);
		setInputValue('');
		setIsAddingEntry(false);
	};

	return (
		<Box display='flex' flexDirection='column' gap={2} sx={{ padding: 1 }}>
			{isAddingEntry ? (
				<>
					<TextField
						fullWidth
						sx={{ marginBottom: 1 }}
						autoFocus
						multiline
						variant='outlined'
						label='Description'
						value={inputValue}
						error={inputValue.length <= 0 && isTouched}
						onChange={onchangeText}
						helperText={inputValue.length <= 0 && isTouched && 'Required field'}
						onBlur={() => setIsTouched(true)}
					/>
					<Box display='flex' justifyContent='space-between'>
						<Button
							variant='contained'
							color='secondary'
							onClick={() => setIsAddingEntry(false)}>
							Cancel
						</Button>
						<Button
							variant='contained'
							color='primary'
							endIcon={<SaveIcon />}
							onClick={onSave}>
							Save
						</Button>
					</Box>
				</>
			) : (
				<Button
					variant='contained'
					fullWidth
					color='primary'
					endIcon={<AddCircleOutlineIcon />}
					onClick={() => setIsAddingEntry(true)}>
					Agregar tarea
				</Button>
			)}
		</Box>
	);
};

export default NewEntry;
