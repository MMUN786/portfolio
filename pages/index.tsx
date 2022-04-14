import { Alert } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return <Alert severity='success'>This is a success alert — check it out!</Alert>;
};

export default Home;
