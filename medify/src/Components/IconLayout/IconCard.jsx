import { Box, Button, Stack, Typography } from '@mui/material';

function Icons ({ img, title, }) {
    return (
        <Stack
            spacing={2}
            alignItems='center'
            
            p={3}
            borderRadius={3}
           
           >
                <Box component='img' src={img} height={60} width={60} />
                <Typography
                    color={ '#ABB6C7'}
                    fontSize={18}
                    fontWeight={'400'}>{title}</Typography>
            </Stack>
    )
};

export default Icons;