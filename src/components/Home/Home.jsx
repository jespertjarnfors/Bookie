import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NavigationBar from './NavigationBar';
import LeftNav from '../LeftNav/LeftNav';



function Home() {

  const { values } = useContext(UserContext)

  return (

    <>
  <LeftNav></LeftNav>
  </>
  );
}

export default Home