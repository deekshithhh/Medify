import { Box, Grid, Typography } from '@mui/material';
import doctor from '../../assets/Doctor.png';
import pharmacy from '../../assets/Drugstore.png';
import hospital from '../../assets/Hospital.png';
import medical from '../../assets/Capsule.png';
import ambulance from '../../assets/Ambulance.png';
import Icons from './IconCard';


export default function IconLayout() {

    const Facilities = [
            { img: doctor, title: 'Doctors' },
            { img: pharmacy, title: 'Labs' },
            { img: hospital, title: 'Hospital', active: true },
            { img: medical, title: 'Medical Store' },
            { img: ambulance, title: 'Ambulance' },
        ];

    return (
        <Box> 
            <Typography
                component='h4'
                fontSize={20}
                color='#102851'
                fontWeight={500}
                textAlign='center'
                marginTop={'10px'}
                mb={2}>
                    You may be looking for
                </Typography>
                <Grid container justifyContent={'center'}>
                    {Facilities.map((facility) => (
                        <Grid item key={facility.title} xs={4} md={2.4} >
                            <Icons img={facility.img} title={facility.title} />
                        </Grid>
                    ))}
                </Grid>
        </Box>
    )
}

