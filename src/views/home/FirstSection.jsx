import { Box, Button, Typography } from "@mui/material"
import phone from '../../assets/images/phone.png'

export const FirstSection = () => {
  return (
      <>
        <Box sx={{
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            marginTop: '40px'
        }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '400px'
            }}>
                <Typography color='white' variant="h1" sx={{
                    fontSize: '45px',
                    fontWeight: '600',
                    width: '300px',
                }}>
                    Habla con libertad
                </Typography>
                        
                <Typography textAlign='justify' marginTop='15px' marginBottom='15px'>
                Di «hola» a una manera diferente de chatear: Smessenger se enfoca en la privacidad, pero con todas las características que esperas de una aplicación de chat
                </Typography>
                        
                <Button variant="contained" color="textDark" sx={{
                    width: '200px',
                    fontSize: '15px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    color: 'white'
                }}
                >
                    Descargar Smessenger
                </Button>

            </Box>
                    
            <img src="" alt="" />

        </Box>


        <Box sx={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            borderRadius: '50px',
            marginTop: '-50px'
        }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%'
            }}>
                <Typography variant="h2" sx={{
                    fontSize: '25px',
                    fontWeight: '600',
                    width: '500px',
                }}>
                    ¿Por qué usar Smessenger?
                </Typography>
                        
                <Typography textAlign='justify' marginTop='15px' marginBottom='15px'>
                Di «hola» a una manera diferente de chatear: Smessenger se enfoca en la privacidad, pero con todas las características que esperas de una aplicación de chat
                </Typography>
                        
  

            </Box>
                    

        </Box>
    </>        
          
  )
}
