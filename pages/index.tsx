import { MainLayout } from '@/components/layouts/MainLayout';
import { NextPage } from 'next';
import { Grid, Card, CardHeader, CardContent } from '@mui/material';
import { EntryList } from '@/components/ui/EntryList';
import { NewEntry } from '@/components/ui/NewEntry';

const HomePage: NextPage = () => {
	return (
		<MainLayout title={'Home - OpenJira'}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Pendings' />
						<NewEntry />
						<CardContent>
							<EntryList status='pending' />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='On progress' />
						<CardContent>
							<EntryList status='in-progress' />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Completed' />
						<CardContent>
							<EntryList status='finished' />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default HomePage;
