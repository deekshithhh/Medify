
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import heroimaage from '../../assets/heroimage.png'

function HeroSection () {
  return (
    <Container style={{marginTop:'10 px'}}>
        <Stack direction={ {md: 'row'} } spacing={10}>
        <Box md={50} alignItems={'center'}>
            <Typography variant='h3'>
            Skip the travel! Find Online
            
            </Typography>
            <Typography variant='h1' component='h1' mb={1}>Medical<span style={{color: '#2AA7FF' }}> Centers</span></Typography>
            <Typography color="#5C6169"> Connect instantly with a 24x7 specialist or choose to video visit a particular doctor</Typography>
            <Button variant='contained' size='large' disableElevation>Find Centers</Button>
        </Box>
        <Box component={'img'} src={heroimaage}  style={{width:'35%'}}>

        </Box>
        </Stack>
       
    </Container>
    
        // <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems='center' pt={2}>
        //   <Box>
        //     <Typography variant='h3' component='h1' >Skip the travel! Find Online</Typography>
        //     <Typography variant='h1' component='h1' mb={1}>Medical<span style={{color: '#2AA7FF' }}> Centers</span></Typography>
        //     <Typography color="#5C6169" fontSize={{ md: 20 }} mb={3}>
        //       Connect instantly with a 24x7 specialist or choose to video visit a particular doctor
        //     </Typography>
        //     <Link to='/search'>
        //     <Button variant='contained' size='large' disableElevation>Find Centers</Button>
        //     </Link>
        //   </Box>
        //   <Box width={{ xs: 1, md: "50%" }} component={'img'} src={img} />
        // </Stack>
    
  )
}

export default HeroSection;