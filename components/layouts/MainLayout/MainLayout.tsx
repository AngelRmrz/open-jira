import React from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { NavBar } from '@/components/ui/NavBar';

export interface MainLayoutProps {
	title?: string;
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title = 'OpenJira', children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>NextJS - MUI - TS - {title}</title>
			</Head>
			<NavBar />
			<Box sx={{ padding: '10px 20px ' }}>{children}</Box>
		</Box>
	);
};

export default MainLayout;
