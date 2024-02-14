import { Box, Typography } from '@mui/material'
import ciudad from '../../assets/images/ciudadWhiteAndBlack.jpg'

export const FirstSection = () => {
  return (
    <>
        <Box sx={{
            height: '400px',
            width: '100%',
            background: `url(${ciudad})`,
            backgroundSize: 'cover'
        }}
        >
            <Typography variant="h3" color='white' style={{
                position: 'absolute',
                top: '200px',
                left: '15%',
                fontWeight: '600'
            }}
            >
                Technical information
            </Typography>

            <Typography color='white'>
                Specifications and software libraries for developers
            </Typography>

        </Box>

    </>
  )
}
