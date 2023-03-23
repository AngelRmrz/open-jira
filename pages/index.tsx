import { MainLayout } from '@/components/layouts/MainLayout';
import { Typography } from '@mui/material';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<MainLayout title={'Home Page'}>
			<Typography variant='h4'>Home Page</Typography>
		</MainLayout>
	);
};

export default HomePage;
